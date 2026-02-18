# Architecture cible – Plateforme de sécurité

## 1) Vision d’architecture

Architecture orientée cloud avec frontend React, API GraphQL et services managés:

- **Frontend Web (React)**
  - Portail superviseur/direction/admin.
- **Application mobile agent (React Native ou PWA)**
  - Pointages terrain, incidents, consultation des rondes.
- **API GraphQL (AppSync/Amplify)**
  - Exposition des entités métier + subscriptions temps réel.
- **Base de données (DynamoDB ou PostgreSQL selon choix Amplify Gen2)**
  - Stockage des rondes, pointages, incidents, rapports.
- **Stockage média (S3)**
  - Photos/preuves d’incidents.
- **Authentification (Cognito)**
  - Gestion utilisateurs, groupes/rôles, MFA.
- **Notifications**
  - SNS/Pinpoint/email/SMS/push.
- **Observabilité**
  - CloudWatch + journal d’audit (actions critiques).

## 2) Domaines métier

### A. Gestion des agents
- Création/activation/désactivation.
- Affectation à des sites et superviseurs.
- Traçabilité des actions terrain.

### B. Gestion des rondes
- Définition de templates de rondes (checkpoints, ordre, fréquence).
- Planification par période (jour/nuit/semaine).
- Affectation automatique ou manuelle des agents.

### C. Pointages
- Prise de poste / fin de poste.
- Validation checkpoint par QR, NFC ou géolocalisation.
- Détection d’anomalies: retard, absence, checkpoint manqué.

### D. Incidents
- Déclaration incident (type, gravité, pièces jointes, géoloc).
- Workflow de traitement: `OPEN -> IN_PROGRESS -> RESOLVED -> CLOSED`.
- Escalade automatique selon SLA/criticité.

### E. Dashboard & reporting
- Vue superviseur: activité en cours, agents en retard, incidents ouverts.
- Vue direction: tendances multi-sites, indicateurs consolidés.
- Exports PDF/CSV + historique consultable.

## 3) Rôles et permissions (RBAC)

- **AGENT**
  - Lecture: rondes affectées, ses incidents.
  - Écriture: pointages, signalements incidents, commentaires.
- **SUPERVISEUR**
  - Lecture/écriture: rondes de ses sites, affectations agents, incidents.
  - Validation: clôture de ronde, qualification initiale incident.
- **DIRECTION**
  - Lecture globale multi-sites, dashboards exécutifs, indicateurs.
  - Décision: politiques de sécurité, priorisation.
- **ADMIN_SYSTEME**
  - Gestion des comptes, paramètres plateforme, intégrations, audit.

## 4) Flux clés

1. **Planification ronde**
   - Superviseur crée une ronde planifiée avec checkpoints.
2. **Exécution agent**
   - Agent démarre la ronde, valide checkpoints, ajoute notes.
3. **Signalement incident**
   - Agent soumet incident, preuves média + niveau de gravité.
4. **Traitement & escalade**
   - Superviseur assigne et traite; escalade si SLA dépassé.
5. **Pilotage direction**
   - Dashboard consolidé et analyse de performance.

## 5) Non-fonctionnel

- **Sécurité**: chiffrement au repos/en transit, MFA, principe du moindre privilège.
- **Résilience**: reprise sur incident, sauvegardes, redondance zone.
- **Performance**: dashboard < 2 secondes pour les KPI principaux.
- **Auditabilité**: journal immuable des actions sensibles.
- **Conformité**: conservation des données et politique RGPD.

## 6) Extensions futures

- Géorepérage intelligent et anti-fraude pointage.
- IA de priorisation incidents et recommandations.
- Intégration vidéo-surveillance / contrôle d’accès.
- Maintenance prédictive des sites sensibles.

