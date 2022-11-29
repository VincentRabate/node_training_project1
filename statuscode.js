const statuscode = [
  { 200: "c'est bon", contenu: "succès de la requète" },
  {
    300: "redirection",
    contenu:
      "301 et 302 : redirection, respectivement permanente et temporaire ",
  },
  {
    400: "probleme utilisateur",
    contenu: "401 : utilisateur non authentifié, 403 : accès refusé ;",
  },
  { 404: "ressource non trouvée", contenu: "la page n'existe peut etrepas" },
  { 500: "erreur serveur", contenu: "il y a eu une erreur du coté du serveur" },
];

export { statuscode };
