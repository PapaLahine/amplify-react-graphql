# OpsGuard – Plateforme de sécurité (MVP exécutable)

Cette version fournit un **prototype fonctionnel** prêt à lancer localement pour couvrir vos besoins principaux:

- Pointages agents (prise de poste, checkpoints, fin de poste)
- Signalement d'incidents avec niveau de gravité
- Vue dashboard pour superviseurs et direction
- Traçabilité locale (stockage navigateur via LocalStorage)

## Lancer le prototype

Depuis la racine du repo:

```bash
python3 -m http.server 4173
```

Puis ouvrir:

- `http://localhost:4173/app/index.html`

## Fonctionnalités incluses

1. **Pointage agent**
   - Saisie agent + site + type de pointage.
2. **Gestion incidents**
   - Création rapide d'un incident (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`).
3. **Dashboard management**
   - KPIs: pointages, incidents ouverts, incidents critiques, sites actifs.
4. **Historique opérationnel**
   - Liste des derniers pointages et incidents.

## Prochaine étape (itération suivante)

- Brancher l'UI au schéma `graphql/schema.graphql`.
- Ajouter authentification + RBAC réel (agent, superviseur, direction, admin).
- Ajouter workflows incidents (`OPEN -> IN_PROGRESS -> RESOLVED -> CLOSED`).
- Générer des rapports exportables (CSV/PDF).

## Références d'architecture

- `docs/architecture.md`
- `docs/user-stories.md`
- `graphql/schema.graphql`
