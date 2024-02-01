# Système de Réservation pour un Hôtel

## Contexte

Un hôtel a sollicité votre expertise pour la mise en place d'un nouveau système de réservation. La demande consiste en la création d'une première version permettant d'accomplir plusieurs fonctionnalités essentielles.

## Spécifications fonctionnelles et Règles de Gestion

### 1. Fonctionnalités pour l'Hôtel (Routes Admin)

#### 1.1. Gestion des Clients

- L'hôtel peut lister l'ensemble de ses clients.
- L'hôtel peut récupérer les informations d'un client spécifique.
- L'hôtel peut ajouter un client.
- L'hôtel peut modifier les informations d'un client.
- L'hôtel peut réserver une chambre pour un client.
- L'hôtel peut annuler la réservation d'un client.

*NB : Pour cet exercice, toutes les fonctionnalités d'ajout, de mise à jour et de suppression n'effectuent aucune action sur les données mais renvoient uniquement un message pour signifier que l'action a bien été exécutée.*

### 2. Fonctionnalités pour les Clients (Routes Utilisateur)

#### 2.1. Accès aux Informations

- Les clients peuvent récupérer les informations de l'hôtel.

#### 2.2. Gestion des Chambres

- Les clients peuvent lister l'ensemble des chambres de l'hôtel.
- Les clients peuvent récupérer les informations d'une chambre spécifique.

#### 2.3. Réservation de Chambres

- Les clients peuvent réserver une chambre.
- Les clients peuvent annuler leur réservation.

*NB : Pour cet exercice, toutes les fonctionnalités d'ajout, de mise à jour et de suppression n'effectuent aucune action sur les données mais renvoient uniquement un message pour signifier que l'action a bien été exécutée.*

---

### Instructions d'Utilisation

1. **Liste de Clients**
   - Endpoint: `GET /hotel/clients`
   - Description: Récupère la liste de tous les clients de l'hôtel.

2. **Informations Client Spécifique**
   - Endpoint: `GET /hotel/clients/{clientId}`
   - Description: Récupère les informations d'un client spécifique.

3. **Ajout de Client**
   - Endpoint: `POST /hotel/clients`
   - Description: Ajoute un nouveau client.

4. **Modification d'Informations Client**
   - Endpoint: `PUT /hotel/clients/{clientId}`
   - Description: Modifie les informations d'un client spécifique.

5. **Réservation de Chambre pour un Client**
   - Endpoint: `POST /hotel/clients/{clientId}/reserve/{roomId}`
   - Description: Réserve une chambre pour un client.

6. **Annulation de Réservation pour un Client**
   - Endpoint: `DELETE /hotel/clients/{clientId}/cancel-reservation`
   - Description: Annule la réservation d'un client.

7. **Accès aux Informations de l'Hôtel pour les Clients**
   - Endpoint: `GET /hotel/info`
   - Description: Récupère les informations générales de l'hôtel pour les clients.

8. **Liste des Chambres de l'Hôtel pour les Clients**
   - Endpoint: `GET /hotel/rooms`
   - Description: Récupère la liste de toutes les chambres de l'hôtel.

9. **Informations d'une Chambre Spécifique pour les Clients**
   - Endpoint: `GET /hotel/rooms/{roomId}`
   - Description: Récupère les informations d'une chambre spécifique.

10. **Réservation de Chambre pour les Clients**
    - Endpoint: `POST /hotel/clients/{clientId}/reserve/{roomId}`
    - Description: Les clients peuvent réserver une chambre.

11. **Annulation de Réservation pour les Clients**
    - Endpoint: `DELETE /hotel/clients/{clientId}/cancel-reservation`
    - Description: Les clients peuvent annuler leur réservation.

---

*Remarque : N'oubliez pas de remplacer `{clientId}` et `{roomId}` par les ID réels des clients et des chambres lors de l'utilisation des endpoints.*

Ces instructions visent à guider l'utilisation de la première version du système de réservation de l'hôtel. Les fonctionnalités actuelles ne modifient pas réellement les données, mais fournissent des messages confirmant que l'action a été exécutée avec succès.
