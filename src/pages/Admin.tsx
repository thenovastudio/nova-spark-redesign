import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Lock, Mail, Building2, Calendar, Eye, Loader2 } from "lucide-react";

interface ContactRequest {
  id: number;
  name: string;
  email: string;
  company: string;
  project_description: string;
  created_at: string;
  status?: string;
}

const AdminDashboard = () => {
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedContact, setSelectedContact] = useState<ContactRequest | null>(null);

  // Simple password protection (gebruik een echte auth in productie!)
  const ADMIN_PASSWORD = "nova2024"; // Wijzig dit!

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchContacts();
    } else {
      alert("Verkeerd wachtwoord!");
    }
  };

  const fetchContacts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching contacts:", error);
    } else {
      setContacts(data || []);
    }
    setLoading(false);
  };

  const updateStatus = async (id: number, status: string) => {
    const { error } = await supabase
      .from("contact_requests")
      .update({ status })
      .eq("id", id);

    if (!error) {
      fetchContacts();
    }
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
        return "bg-blue-500";
      case "in_progress":
        return "bg-yellow-500";
      case "resolved":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <Lock className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Wachtwoord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
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
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold">Contact Aanvragen</h1>
              <p className="text-muted-foreground mt-2">
                Beheer alle binnenkomende contactaanvragen
              </p>
            </div>
            <Button onClick={fetchContacts} variant="outline">
              Ververs
            </Button>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Naam</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Bedrijf</TableHead>
                    <TableHead>Datum</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Acties</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell className="font-medium">
                        {contact.name}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-primary hover:underline"
                          >
                            {contact.email}
                          </a>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          {contact.company || "-"}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          {formatDate(contact.created_at)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(contact.status)}>
                          {contact.status || "new"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedContact(contact)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </section>

      {/* Detail Dialog */}
      <Dialog
        open={!!selectedContact}
        onOpenChange={() => setSelectedContact(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Contact Aanvraag Details</DialogTitle>
            <DialogDescription>
              Ontvangen op {selectedContact && formatDate(selectedContact.created_at)}
            </DialogDescription>
          </DialogHeader>

          {selectedContact && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Naam
                </label>
                <p className="text-lg">{selectedContact.name}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <p className="text-lg">
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="text-primary hover:underline"
                  >
                    {selectedContact.email}
                  </a>
                </p>
              </div>

              {selectedContact.company && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Bedrijf
                  </label>
                  <p className="text-lg">{selectedContact.company}</p>
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Bericht
                </label>
                <p className="text-lg whitespace-pre-wrap">
                  {selectedContact.project_description}
                </p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  onClick={() => updateStatus(selectedContact.id, "in_progress")}
                  variant="outline"
                >
                  In behandeling
                </Button>
                <Button
                  onClick={() => updateStatus(selectedContact.id, "resolved")}
                  variant="outline"
                >
                  Afgehandeld
                </Button>
                <Button
                  onClick={() => updateStatus(selectedContact.id, "new")}
                  variant="outline"
                >
                  Reset naar nieuw
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
};

export default AdminDashboard;