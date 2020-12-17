export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

// ce sont les actions le type de l'action 'Increment' et l'action increment
// dans le template dans le dispatch on appele le type d'action => le type d'action appelle l'action qui est créer dans le store increment => cette action fait
// un commit pour lancer la mutation en paramétre il prend le context et le payload (s'il y'en a) dans la fonction on fait commit sur la mutation
// qui a été crée et payload la mutation permet de changer le state avec le payload ou tout autre maniére de modifier le store