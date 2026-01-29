import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Lock, 
  Mail, 
  Building2, 
  Calendar, 
  Loader2, 
  RefreshCw, 
  ChevronDown, 
  ChevronUp,
  MessageSquare,
  Archive,
  ArchiveRestore,
  Inbox
} from "lucide-react";

interface ContactRequest {
  id: number;
  name: string;
  email: string;
  company: string;
  message: string;
  created_at: string;
  status?: string;
  archived?: boolean;
}

const AdminDashboard = () => {
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"active" | "archived">("active");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Simple password protection (gebruik een echte auth in productie!)
  const ADMIN_PASSWORD = "nova2024"; // Wijzig dit!

  useEffect(() => {
    // Check if already authenticated in session
    const auth = sessionStorage.getItem("admin_authenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
      fetchContacts();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_authenticated", "true");
      fetchContacts();
    } else {
      alert("Verkeerd wachtwoord!");
    }
  };

  const fetchContacts = async () => {
    setLoading(true);
    
    // First, try to add the archived column if it doesn't exist
    try {
      const { error: columnError } = await supabase.rpc('exec_sql', {
        sql: `
          DO $$ 
          BEGIN
            IF NOT EXISTS (
              SELECT 1 FROM information_schema.columns 
              WHERE table_name = 'contact_requests' AND column_name = 'archived'
            ) THEN
              ALTER TABLE contact_requests ADD COLUMN archived BOOLEAN DEFAULT FALSE;
            END IF;
          END $$;
        `
      });
      
      // Ignore error if RPC doesn't exist, we'll handle it differently
      if (columnError) {
        console.log("RPC not available, column might need manual creation");
      }
    } catch (e) {
      console.log("Could not auto-create column:", e);
    }

    const { data, error } = await supabase
      .from("contact_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching contacts:", error);
      
      // If error is about archived column, provide helpful message
      if (error.message.includes("archived")) {
        alert(
          "De 'archived' kolom moet worden toegevoegd aan je database.\n\n" +
          "Ga naar Supabase SQL Editor en run:\n" +
          "ALTER TABLE contact_requests ADD COLUMN archived BOOLEAN DEFAULT FALSE;"
        );
      } else {
        alert("Fout bij het ophalen van contacten: " + error.message);
      }
    } else {
      // Log the raw data to see what's coming from database
      console.log("=== FETCH CONTACTS ===");
      console.log("Total contacts fetched:", data?.length);
      console.log("Raw data from database:", data);
      
      // Ensure all contacts have archived property (even if null in DB)
      const contactsWithArchived = (data || []).map(contact => {
        const processedContact = {
          ...contact,
          archived: contact.archived ?? false,
          status: contact.status || "new" // Default to "new" if no status
        };
        console.log(`Contact ${contact.id}:`, {
          name: contact.name,
          statusFromDB: contact.status,
          statusProcessed: processedContact.status,
          archivedFromDB: contact.archived,
          archivedProcessed: processedContact.archived
        });
        return processedContact;
      });
      setContacts(contactsWithArchived);
      console.log("=== FETCH CONTACTS END ===");
    }
    setLoading(false);
  };

  const updateStatus = async (id: number, status: string) => {
    console.log("=== UPDATE STATUS START ===");
    console.log("Updating status for ID:", id, "to:", status);
    
    // First, let's see what the current state is in the database
    const { data: beforeData } = await supabase
      .from("contact_requests")
      .select("id, status")
      .eq("id", id)
      .single();
    
    console.log("Status BEFORE update in DB:", beforeData);
    
    // Optimistically update UI first
    setContacts(prevContacts =>
      prevContacts.map(contact =>
        contact.id === id ? { ...contact, status } : contact
      )
    );

    const { data, error } = await supabase
      .from("contact_requests")
      .update({ status })
      .eq("id", id)
      .select();

    if (error) {
      console.error("❌ Error updating status:", error);
      alert("Fout bij het updaten: " + error.message);
      // Revert optimistic update on error
      fetchContacts();
    } else {
      console.log("✅ Status updated successfully in database:", data);
      // Verify the update worked by checking the returned data
      if (data && data.length > 0) {
        console.log("✅ New status in DB:", data[0].status);
        
        // Double check by fetching again
        const { data: verifyData } = await supabase
          .from("contact_requests")
          .select("id, status")
          .eq("id", id)
          .single();
        console.log("✅ VERIFICATION - Status in DB after update:", verifyData);
      }
    }
    console.log("=== UPDATE STATUS END ===");
  };

  const toggleArchive = async (id: number, currentArchived?: boolean) => {
    const newArchivedState = !currentArchived;
    console.log("=== TOGGLE ARCHIVE START ===");
    console.log("Toggling archive for ID:", id, "from:", currentArchived, "to:", newArchivedState);
    
    // First, let's see what the current state is in the database
    const { data: beforeData } = await supabase
      .from("contact_requests")
      .select("id, archived")
      .eq("id", id)
      .single();
    
    console.log("Archived BEFORE update in DB:", beforeData);
    
    const { data, error } = await supabase
      .from("contact_requests")
      .update({ archived: newArchivedState })
      .eq("id", id)
      .select();

    if (error) {
      console.error("❌ Error toggling archive:", error);
      alert("Fout bij het archiveren: " + error.message);
    } else {
      console.log("✅ Archive toggled successfully:", data);
      
      // Double check by fetching again
      const { data: verifyData } = await supabase
        .from("contact_requests")
        .select("id, archived")
        .eq("id", id)
        .single();
      console.log("✅ VERIFICATION - Archived in DB after update:", verifyData);
      
      // Update local state immediately
      setContacts(prevContacts =>
        prevContacts.map(contact =>
          contact.id === id ? { ...contact, archived: newArchivedState } : contact
        )
      );
      // Close expanded view if archiving
      if (expandedId === id) {
        setExpandedId(null);
      }
    }
    console.log("=== TOGGLE ARCHIVE END ===");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("nl-NL", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500 hover:bg-blue-600 text-white";
      case "in_progress":
        return "bg-yellow-500 hover:bg-yellow-600 text-white";
      case "resolved":
        return "bg-green-500 hover:bg-green-600 text-white";
      default:
        return "bg-gray-500 hover:bg-gray-600 text-white";
    }
  };

  const getStatusLabel = (status?: string) => {
    switch (status) {
      case "new":
        return "Nieuw";
      case "in_progress":
        return "In behandeling";
      case "resolved":
        return "Afgehandeld";
      default:
        return "Nieuw";
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Filter contacts based on active tab and status filter
  const filteredContacts = contacts.filter(contact => {
    // First filter by tab (active/archived)
    const tabMatch = activeTab === "archived" 
      ? contact.archived === true 
      : contact.archived !== true;
    
    if (!tabMatch) return false;

    // Then filter by status
    if (statusFilter === "all") return true;
    
    const contactStatus = contact.status || "new";
    return contactStatus === statusFilter;
  });

  // Get counts for tabs
  const activeCount = contacts.filter(c => c.archived !== true).length;
  const archivedCount = contacts.filter(c => c.archived === true).length;

  // Get counts per status (for active tab only)
  const statusCounts = {
    all: contacts.filter(c => c.archived !== true).length,
    new: contacts.filter(c => c.archived !== true && (c.status === "new" || !c.status)).length,
    in_progress: contacts.filter(c => c.archived !== true && c.status === "in_progress").length,
    resolved: contacts.filter(c => c.archived !== true && c.status === "resolved").length,
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="bg-card border rounded-lg shadow-xl p-8 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <Lock className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-6 text-foreground">
            Admin Login
          </h1>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Wachtwoord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
              className="w-full"
            />
            <Button onClick={handleLogin} className="w-full">
              Inloggen
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground">
                Contact Aanvragen
              </h1>
              <p className="text-muted-foreground mt-2">
                Beheer alle binnenkomende contactaanvragen
              </p>
            </div>
            <Button onClick={fetchContacts} variant="outline" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Ververs
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b">
            <button
              onClick={() => setActiveTab("active")}
              className={`px-4 py-2 font-medium transition-colors relative ${
                activeTab === "active"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <Inbox className="h-4 w-4" />
                Actief
                {activeCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {activeCount}
                  </Badge>
                )}
              </div>
              {activeTab === "active" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("archived")}
              className={`px-4 py-2 font-medium transition-colors relative ${
                activeTab === "archived"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <Archive className="h-4 w-4" />
                Archief
                {archivedCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {archivedCount}
                  </Badge>
                )}
              </div>
              {activeTab === "archived" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>

          {/* Status Filter - Only show for Active tab */}
          {activeTab === "active" && (
            <div className="mb-6 flex flex-wrap gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("all")}
                className="gap-2"
              >
                Alle
                <Badge variant={statusFilter === "all" ? "secondary" : "outline"} className="ml-1">
                  {statusCounts.all}
                </Badge>
              </Button>
              <Button
                variant={statusFilter === "new" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("new")}
                className="gap-2"
              >
                Nieuw
                <Badge variant={statusFilter === "new" ? "secondary" : "outline"} className="ml-1">
                  {statusCounts.new}
                </Badge>
              </Button>
              <Button
                variant={statusFilter === "in_progress" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("in_progress")}
                className="gap-2"
              >
                In behandeling
                <Badge variant={statusFilter === "in_progress" ? "secondary" : "outline"} className="ml-1">
                  {statusCounts.in_progress}
                </Badge>
              </Button>
              <Button
                variant={statusFilter === "resolved" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("resolved")}
                className="gap-2"
              >
                Afgehandeld
                <Badge variant={statusFilter === "resolved" ? "secondary" : "outline"} className="ml-1">
                  {statusCounts.resolved}
                </Badge>
              </Button>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="bg-card border rounded-lg shadow p-12 text-center">
              <div className="flex justify-center mb-4">
                {activeTab === "active" ? (
                  <Inbox className="h-12 w-12 text-muted-foreground" />
                ) : (
                  <Archive className="h-12 w-12 text-muted-foreground" />
                )}
              </div>
              <p className="text-muted-foreground">
                {activeTab === "active" 
                  ? "Geen actieve contactaanvragen gevonden."
                  : "Geen gearchiveerde contactaanvragen."}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="bg-card border rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md"
                >
                  {/* Header Row - Always Visible */}
                  <div
                    className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => toggleExpand(contact.id)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        {/* Name */}
                        <div className="flex-shrink-0">
                          <p className="font-semibold text-foreground">
                            {contact.name}
                          </p>
                        </div>

                        {/* Email */}
                        <div className="hidden md:flex items-center gap-2 flex-1 min-w-0">
                          <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-primary hover:underline truncate text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {contact.email}
                          </a>
                        </div>

                        {/* Company */}
                        {contact.company && (
                          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {contact.company}
                            </span>
                          </div>
                        )}

                        {/* Date */}
                        <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {formatDate(contact.created_at)}
                          </span>
                        </div>

                        {/* Status Badge */}
                        <Badge className={getStatusColor(contact.status)}>
                          {getStatusLabel(contact.status)}
                        </Badge>
                      </div>

                      {/* Expand/Collapse Icon */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(contact.id);
                        }}
                      >
                        {expandedId === contact.id ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Content - Details */}
                  {expandedId === contact.id && (
                    <div className="border-t bg-muted/30">
                      <div className="p-6 space-y-6">
                        {/* Mobile: Show email if hidden */}
                        <div className="md:hidden space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">
                            Email
                          </label>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <a
                              href={`mailto:${contact.email}`}
                              className="text-primary hover:underline"
                            >
                              {contact.email}
                            </a>
                          </div>
                        </div>

                        {/* Mobile: Show company if hidden */}
                        {contact.company && (
                          <div className="lg:hidden space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">
                              Bedrijf
                            </label>
                            <div className="flex items-center gap-2">
                              <Building2 className="h-4 w-4 text-muted-foreground" />
                              <span>{contact.company}</span>
                            </div>
                          </div>
                        )}

                        {/* Mobile: Show date if hidden */}
                        <div className="xl:hidden space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">
                            Datum & Tijd
                          </label>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{formatDate(contact.created_at)}</span>
                          </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" />
                            Bericht
                          </label>
                          <div className="bg-background rounded-lg p-4 border">
                            <p className="text-base whitespace-pre-wrap text-foreground">
                              {contact.message || "Geen bericht opgegeven"}
                            </p>
                          </div>
                        </div>

                        {/* Status Actions */}
                        <div className="space-y-3 pt-4 border-t">
                          <label className="text-sm font-medium text-muted-foreground block">
                            Status Wijzigen
                          </label>
                          <div className="flex flex-wrap gap-2">
                            <Button
                              onClick={() => updateStatus(contact.id, "new")}
                              variant={contact.status === "new" ? "default" : "outline"}
                              size="sm"
                              className="gap-2"
                            >
                              Nieuw
                            </Button>
                            <Button
                              onClick={() => updateStatus(contact.id, "in_progress")}
                              variant={contact.status === "in_progress" ? "default" : "outline"}
                              size="sm"
                              className="gap-2"
                            >
                              In behandeling
                            </Button>
                            <Button
                              onClick={() => updateStatus(contact.id, "resolved")}
                              variant={contact.status === "resolved" ? "default" : "outline"}
                              size="sm"
                              className="gap-2"
                            >
                              Afgehandeld
                            </Button>
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex gap-2 pt-4 border-t">
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2"
                            onClick={() => window.location.href = `mailto:${contact.email}`}
                          >
                            <Mail className="h-4 w-4" />
                            Email Versturen
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2"
                            onClick={() => toggleArchive(contact.id, contact.archived)}
                          >
                            {contact.archived ? (
                              <>
                                <ArchiveRestore className="h-4 w-4" />
                                Terugzetten
                              </>
                            ) : (
                              <>
                                <Archive className="h-4 w-4" />
                                Archiveren
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AdminDashboard;