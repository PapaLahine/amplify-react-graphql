# Plateforme de gestion de sécurité (agents, superviseurs, direction)

Ce dépôt initialise une **plateforme de pilotage des opérations de sécurité** orientée terrain et supervision, basée sur une architecture React + GraphQL (AWS Amplify).

## Objectifs métier

- Permettre aux **agents de sécurité** de faire leurs pointages (prise de poste, checkpoints de ronde, fin de ronde).
- Permettre le **signalement d’incidents** avec preuves (texte, photos, localisation, criticité).
- Permettre aux **superviseurs** de planifier et suivre les rondes des agents.
- Offrir à la **direction** un dashboard consolidé (KPI, alertes, conformité, incidents globaux, traçabilité).
- Gérer l’administration de la plateforme (sites, utilisateurs, rôles, notifications, paramètres).

## Modules fonctionnels (MVP)

1. **Authentification & rôles**
   - Rôles: `AGENT`, `SUPERVISEUR`, `DIRECTION`, `ADMIN_SYSTEME`.
2. **Gestion des sites**
   - Création de sites, zones, checkpoints.
3. **Gestion des rondes**
   - Templates de rondes, affectation agent/superviseur, planification.
4. **Pointage mobile agent**
   - Check-in/check-out, horodatage, géolocalisation, statut.
5. **Incidents**
   - Déclaration, qualification, assignation, résolution, audit trail.
6. **Alertes & notifications**
   - Push/email/SMS selon criticité et règles.
7. **Rapports & tableau de bord**
   - KPIs opérationnels, conformité des rondes, incidents par site.
8. **Administration système**
   - Paramètres de seuils, SLA, canaux de notification, journal d’audit.

## Livrables inclus dans ce dépôt

- `docs/architecture.md`: architecture cible et flux techniques.
- `docs/user-stories.md`: user stories structurées par persona.
- `graphql/schema.graphql`: modèle de données GraphQL initial (MVP).

## Roadmap d’implémentation (proposée)

- **Phase 1**: fondations IAM/roles, sites, rondes, pointages.
- **Phase 2**: incidents, notifications, dashboard superviseur.
- **Phase 3**: dashboard direction, rapports avancés, analytics.
- **Phase 4**: optimisation mobile offline, SLA, automatisations.

## KPI de succès

- Taux de rondes réalisées vs planifiées.
- Temps moyen de traitement incident (MTTR).
- Taux de conformité pointage.
- Nombre d’alertes critiques non traitées (temps réel).

