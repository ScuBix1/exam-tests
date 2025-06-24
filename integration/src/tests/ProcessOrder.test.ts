import { describe, expect, test } from 'vitest';
import { RestaurantSystem } from '../RestaurantService';

describe('ProcessOrder', () => {
  test('Devrait créer un client, un produit, passer une commande et générer une facture', () => {
    const system = new RestaurantSystem();

    const customerService = system.getCustomerService();
    const customer = customerService.createCustomer({
      name: 'John Doe',
      email: 'john.doe@email.com',
      address: '15 rue de Paris, Lyon',
      phone: '0600000000',
    });

    const productService = system.getProductService();
    const product = productService.createProduct({
      name: 'Pizza Margherita',
      description: 'Pizza classique',
      price: 12,
      category: 'main',
      available: true,
      preparationTimeMinutes: 20,
    });

    const { order, invoice } = system.processOrder(customer.id, [
      { productId: product.id, quantity: 2 },
    ]);

    expect(order).toBeDefined();
    expect(order?.items.length).toBe(1);
    expect(order?.items[0].productId).toBe(product.id);
    expect(order?.totalAmount).toBe(24);

    expect(invoice).toBeDefined();
    expect(invoice?.orderId).toBe(order?.id);
    expect(invoice?.totalAmount).toBe(order?.totalAmount);
    expect(invoice?.tax).toBeCloseTo(2.4, 1);
    expect(invoice?.paid).toBe(false);
  });

  test('Ne devrait pas générer de facture si la commande échoue (produit indisponible)', () => {
    const system = new RestaurantSystem();

    const customer = system.getCustomerService().createCustomer({
      name: 'Jean Doe',
      email: 'jean.doe@email.com',
      address: '25 rue jean doe',
      phone: '0700000000',
    });

    const product = system.getProductService().createProduct({
      name: 'Burger',
      description: 'Burger',
      price: 14,
      category: 'main',
      available: false,
      preparationTimeMinutes: 15,
    });

    const { order, invoice } = system.processOrder(customer.id, [
      { productId: product.id, quantity: 1 },
    ]);

    expect(order).toBeNull();
    expect(invoice).toBeNull();
  });
});
