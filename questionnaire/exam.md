# Questionnaire

### Objectif des tests unitaires

Quel est l'objectif principal des tests unitaires ?

- B) Vérifier le comportement d'une unité de code isolée

### Utilisation de Gherkin

Gherkin est principalement utilisé pour :

- Pas vu

### Principe d'isolation

Expliquez en quoi consiste le principe d'isolation dans les tests unitaires et pourquoi il est important.

Le principe d'isolation dans les tests unitaires est le fait de ne pas dépendre d'éléments extérieur au tests, c'est important pour ne pas apporté d'éléments externe pour ne tester que cette fonction ce qu'elle renvoie et que le résultats ne rate pas à cause d'un autre état.

### Origine du BDD

Le BDD est une extension du :

- B) Test Driven Development

### Fonction des tests d'intégration

Les tests d'intégration vérifient principalement :

- B) L'interaction entre différents composants ou modules

### Structure Gherkin

Expliquez la structure d'un scénario Gherkin et donnez un exemple concret.
Pas vu

### Mocks en tests unitaires

Dans le contexte des tests unitaires, que sont les "mocks" ?

- B) Des objets qui simulent le comportement de dépendances réelles

### Objectif des tests end-to-end

Les tests end-to-end visent à :

- B) Tester l'application de bout en bout du point de vue de l'utilisateur

### Cycle TDD

Expliquez en détail le cycle Red-Green-Refactor du TDD et ce qui se passe à chaque étape.

### Caractéristiques d'un bon test unitaire

Quelle est la caractéristique idéale d'un bon test unitaire ? - A) Il doit être complexe pour couvrir tous les cas

### Mots-clés de Gherkin

Quels sont les mots-clés principaux de Gherkin ?
Pas vu

### Tests unitaires vs tests d'intégration

Quelles sont les principales différences entre les tests unitaires et les tests d'intégration ?
Un test unitaire va vérifier seulement le retour d'une fonction, on test seulement un cas isolé tandis que les tests d'intégration vérifie que des partie d'un programme intéragissent bien entre elles.

### Nom du cycle TDD

Le cycle TDD classique est connu sous le nom de : - B) Red-Green-Refactor

### Focus des tests fonctionnels

Les tests fonctionnels se concentrent sur : - B) Les interactions entre composants

### BDD et communication d'équipe

Comment le BDD peut-il améliorer la communication entre les équipes techniques et les équipes métier ?

### Avantage principal du TDD

Quel est l'avantage principal du TDD ? - C) Il favorise un design modulaire et des interfaces claires

### Avantages et défis des tests end-to-end

Quels sont les avantages et les défis spécifiques liés aux tests end-to-end par rapport aux autres types de tests ?

- avantages:
  - assure un bon comportement pour l'utilisateur
  - permet de tester rapidement de manière efficace
  - assure une même expérience sur les différents navigateur
- défis spécifiques:
  - bien s'organiser pour tout tester correctement

### Format des scénarios BDD

Quel est le format typique d'un scénario BDD ? - B) Étant donné-Quand-Alors

### Avantages et limites des tests unitaires

Décrivez les avantages et les limites des tests unitaires dans un projet de développement logiciel.

- avantages:
  - détection de bugs simplifié
  - confiance dans le code
  - limite la documentation
  - code mieux découpé
- limites:
  - coûteux en temps de développement
  - avoir une fausse confiance dans le code

### Fonctionnalité de réutilisation dans Gherkin

Quelle est la fonctionnalité de Gherkin qui permet de réutiliser des étapes communes à plusieurs scénarios ? pas vu

### Responsabilité des tests fonctionnels

Qui est généralement responsable de l'écriture et de l'exécution des tests fonctionnels ? - C) Les développeurs et les testeurs QA

### Moment d'écriture du code en TDD

Dans le TDD, à quel moment écrit-on le code de production ? - D) Après que tous les tests aient réussi

### Outils pour tests end-to-end

Quel outil est couramment utilisé pour les tests end-to-end d'applications web ? - C) Playwright

### Différences entre BDD et TDD

En quoi le BDD diffère-t-il du TDD en termes d'approche et d'objectifs ?
Le BDD privilégie l'écriture des tests avant le développement des fonctions ou des parties d'un programme.

### Défis des tests d'intégration

Quels défis sont fréquemment rencontrés lors de la mise en place de tests d'intégration ? - D) Toutes les réponses ci-dessus

### Caractéristiques d'un bon test end-to-end

Quelle est la caractéristique d'un bon test end-to-end ? - B) Il doit simuler avec précision le comportement réel des utilisateurs

### Défis de l'adoption du TDD

Quels sont les défis couramment rencontrés lors de l'adoption du TDD dans une équipe, et comment pourriez-vous les surmonter ?
Le TDD demande quelques changements : de la vitesse vers la confiance, la robustesse et la maintenabilité.
Sa réussite passe par de la formation, des outils adaptés et un démarrage progressif.

### Frameworks de tests unitaires

Lequel de ces frameworks n'est PAS utilisé pour les tests unitaires ? - C) Selenium

### Rôles dans le processus BDD

Quels rôles sont généralement impliqués dans le processus BDD ? - D) Développeurs, testeurs, product owners et parties prenantes métier

### Maintenance des tests end-to-end

Comment géreriez-vous la maintenance des tests end-to-end pour une application qui évolue rapidement ?

### Inconvénients des tests fonctionnels

Quel est le principal inconvénient des tests fonctionnels ? - B) Ils sont généralement lents et coûteux à exécuter

### Intégration de Gherkin en agile

Comment intégreriez-vous Gherkin dans un processus de développement agile ? Quels seraient les avantages ?
Pas vu

### Principes du TDD

Lequel des principes suivants n'est PAS associé au TDD ? - A) Écrire le test minimum qui échoue

### Différences entre tests fonctionnels et autres tests

En quoi les tests fonctionnels diffèrent-ils des tests unitaires et d'intégration en termes d'approche et d'objectifs ?
Il diffère des tests unitaires et d'intégration car ici on se met à la place de l'utilisateur final. On test avec un navigateur, on tests des clics, ...

### Approche combinant TDD, BDD et Gherkin

Quelle approche combine naturellement TDD, BDD et Gherkin ? Pas vu ?

### Organisation des tests fonctionnels

Décrivez comment vous organiseriez les tests fonctionnels pour une application web de e-commerce.

- authentification
- navigation
- panier
- commande
- paiement
- historique des commandes

### Pyramide de tests

Quelle est la pyramide de tests classique, du bas vers le haut ? - B) Tests unitaires, Tests d'intégration, Tests fonctionnels, Tests E2E

### Stratégie de test optimale

Comment détermineriez-vous la stratégie de test optimale pour un projet, en considérant les différents types de tests abordés dans ce questionnaire ?
Il faut majoritairement des tests unitaires, ensuite avec les tests d'intégrations vérifier les cas critiques. Puis quelques tests fonctionnels automatisé pour le parcours utilisateur

### Quelle est l'erreur récurente qui peut être faite lors de test end 2 end ? (Je l'ai répété pas mal de fois)

Tester trop de choses en un seul test
