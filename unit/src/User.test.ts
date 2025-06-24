import { describe, expect, test } from 'vitest';
import { User } from './User';

describe('User', () => {
  const idUtilisateur = 'jean.dupont';
  const nom = 'Jean Dupont';
  const email = 'jean.dupont@exemple.com';

  test('Devrait créer un utilisateur standard avec les bonnes propriétés', () => {
    const utilisateur = new User(idUtilisateur, nom, email);

    expect(utilisateur.id).toBe(idUtilisateur);
    expect(utilisateur.name).toBe(nom);
    expect(utilisateur.email).toBe(email);
    expect(utilisateur.category).toBe('standard');
    expect(utilisateur.currentLoans).toEqual([]);
  });

  test('Devrait créer un utilisateur avec une catégorie personnalisée', () => {
    const utilisateur = new User(idUtilisateur, nom, email, 'premium');
    expect(utilisateur.category).toBe('premium');
  });

  describe('Méthode canBorrow()', () => {
    test('Devrait autoriser un utilisateur standard à emprunter s’il a moins de 3 livres', () => {
      const utilisateur = new User(idUtilisateur, nom, email, 'standard');
      utilisateur.currentLoans = ['livre', '1984'];
      expect(utilisateur.canBorrow()).toBe(true);
    });

    test('Ne devrait pas autoriser un utilisateur standard à emprunter s’il a déjà 3 livres', () => {
      const utilisateur = new User(idUtilisateur, nom, email, 'standard');
      utilisateur.currentLoans = ['livre1', 'livre2', 'livre3'];
      expect(utilisateur.canBorrow()).toBe(false);
    });

    test('Devrait autoriser un utilisateur premium à emprunter jusqu’à 5 livres', () => {
      const utilisateur = new User(idUtilisateur, nom, email, 'premium');

      utilisateur.currentLoans = ['livre1', 'livre2', 'livre3', 'livre4'];
      expect(utilisateur.canBorrow()).toBe(true);

      utilisateur.currentLoans.push('livre5');
      expect(utilisateur.canBorrow()).toBe(false);
    });

    test('Devrait autoriser un employé à emprunter jusqu’à 8 livres', () => {
      const utilisateur = new User(idUtilisateur, nom, email, 'employee');

      utilisateur.currentLoans = [
        'livre1',
        'livre2',
        'livre3',
        'livre4',
        'livre5',
        'livre6',
        'livre7',
      ];
      expect(utilisateur.canBorrow()).toBe(true);

      utilisateur.currentLoans.push('livre8');
      expect(utilisateur.canBorrow()).toBe(false);
    });
  });

  describe('Méthode addLoan()', () => {
    test('Devrait ajouter un livre à la liste des prêts si non présent', () => {
      const utilisateur = new User(idUtilisateur, nom, email);
      utilisateur.addLoan('livre');
      expect(utilisateur.currentLoans).toContain('livre');
    });

    test('Ne devrait pas ajouter deux fois le même livre', () => {
      const utilisateur = new User(idUtilisateur, nom, email);
      utilisateur.addLoan('livre');
      utilisateur.addLoan('livre');
      expect(utilisateur.currentLoans).toEqual(['livre']);
    });
  });

  describe('Méthode removeLoan()', () => {
    test('Devrait supprimer un livre de la liste des prêts', () => {
      const utilisateur = new User(idUtilisateur, nom, email);
      utilisateur.currentLoans = ['livre', '1984'];
      utilisateur.removeLoan('livre');
      expect(utilisateur.currentLoans).toEqual(['1984']);
    });

    test('Ne devrait rien faire si le livre n’est pas dans la liste', () => {
      const utilisateur = new User(idUtilisateur, nom, email);
      utilisateur.currentLoans = ['1984'];
      utilisateur.removeLoan('livre');
      expect(utilisateur.currentLoans).toEqual(['1984']);
    });
  });
});
