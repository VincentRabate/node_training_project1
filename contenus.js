const c100 = [
  {
    code: "100",
    message: "Continue",
    signification: "Attente de la suite de la requête.",
  },
  {
    code: "101",
    message: "Switching Protocols",
    signification: "Acceptation du changement de protocole.",
  },
  {
    code: "102",
    message: "Processing",
    signification:
      "Traitement en cours (évite que le client dépasse le temps d’attente limite).",
  },
  {
    code: "103",
    message: "Early Hints",
    signification:
      "(Expérimental) Dans l'attente de la réponse définitive, le serveur retourne des liens que le client peut commencer à télécharger.",
  },
];

export { c100 };
