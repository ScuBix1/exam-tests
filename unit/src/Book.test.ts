import { describe, expect, test } from 'vitest';
import { Book } from './Book';

describe('Book', async () => {
  const bookId = '1';
  const title = '2024';
  const author = 'Auteur Livre';

  test('Doit instancier un livre avec les bonnes propriétés par défaut', async () => {
    const book = new Book(bookId, title, author);

    expect(book.id).toBe(bookId);
    expect(book.title).toBe(title);
    expect(book.author).toBe(author);
    expect(book.status).toBe('available');
    expect(book.borrowedBy).toBeUndefined();
    expect(book.borrowDate).toBeUndefined();
    expect(book.dueDate).toBeUndefined();
  });

  describe('Méthodes de statut', () => {
    test('isAvailable() devrait retourner true si le livre est disponible', () => {
      const book = new Book(bookId, title, author);
      book.status = 'available';
      expect(book.isAvailable()).toBe(true);
    });

    test("isAvailable() devrait retourner false si le livre n'est pas disponible", () => {
      const book = new Book(bookId, title, author);
      book.status = 'borrowed';
      expect(book.isAvailable()).toBe(false);
    });

    test('isBorrowed() devrait retourner true si le livre est emprunté', () => {
      const book = new Book(bookId, title, author);
      book.status = 'borrowed';
      expect(book.isBorrowed()).toBe(true);
    });

    test('isBorrowed() devrait retourner false si le livre n’est pas emprunté', () => {
      const book = new Book(bookId, title, author);
      book.status = 'available';
      expect(book.isBorrowed()).toBe(false);
    });

    test('isInMaintenance() devrait retourner true si le livre est en maintenance', () => {
      const book = new Book(bookId, title, author);
      book.status = 'maintenance';
      expect(book.isInMaintenance()).toBe(true);
    });

    test("isInMaintenance() devrait retourner false si le livre n'est pas en maintenance", () => {
      const book = new Book(bookId, title, author);
      book.status = 'available';
      expect(book.isInMaintenance()).toBe(false);
    });
  });
});
