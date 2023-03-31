// L'URL sur laquelle votre application web est visitable (à changer si nécessaire)
export const BASE_URL = "http://127.0.0.1:8080/";
// L'URL de l'API Supabase à mettre à jour absolument
export const API_URL = "https://wbqrxkujqclspbtvfept.supabase.co/rest/v1/";
// La clé d'API de votre compte Supabase à mettre à jour absolument
export const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndicXJ4a3VqcWNsc3BidHZmZXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MTQyNjcsImV4cCI6MTk5NTQ5MDI2N30.iK3EBd8oWneMNNSIdswSrt_s1_elou-g8OOJRkmblcw"
  

/**
 * Petite fonction utilitaire qui permet de supprimer tout ce qui se trouve dans les tables customers et invoices
 * de l'API SupaBase
 */
export const resetDatabase = () => {
  cy.request({
    method: "DELETE",
    url: API_URL + "/invoices?id=gt.0",
    headers: {
      apiKey: API_KEY,
    },
  });

  cy.request({
    method: "DELETE",
    url: API_URL + "/customers?id=gt.0",
    headers: {
      apiKey: API_KEY,
    },
  });
};
