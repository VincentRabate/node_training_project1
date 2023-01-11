const x100 = [
  {
    status: "100",
    titre: "Information",
  },
];
const x200 = [{ status: "200", titre: "succès de la requète" }];
const x300 = [
  {
    status: "300",
    titre: "redirection",
    suite: "301 = permanante, 302 = temporaire",
  },
];
const x400 = [{ status: "400", titre: "problème utilisateur" }];
const x500 = [
  {
    status: "500",
    titre: "erreur serveur",
    suite: "504 = le serveur n'a pas répondu",
  },
];
const x404 = [{ status: "404", titre: "ressource non trouvée" }];

export { x100, x200, x300, x400, x500, x404 };
