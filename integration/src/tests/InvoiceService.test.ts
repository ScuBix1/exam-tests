import { beforeEach, describe, expect, test, vi } from 'vitest';
import { DataStore } from '../DataStore';
import { InvoiceService } from '../InvoiceService';
import { IOrder } from '../types';

describe('InvoiceService', () => {
  let dataStore: DataStore;
  let orderServiceMock: { getOrder: ReturnType<typeof vi.fn> };
  let invoiceService: InvoiceService;

  beforeEach(() => {
    dataStore = new DataStore();

    orderServiceMock = {
      getOrder: vi.fn(),
    };

    invoiceService = new InvoiceService(dataStore, orderServiceMock as any);
  });

  test("Devrait créer une facture si la commande existe et qu'aucune facture n'existe encore", () => {
    const mockOrder: IOrder = {
      id: 'order_1',
      customerId: 'customer_123',
      items: [{ productId: 'product_1', quantity: 2, unitPrice: 15 }],
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
      totalAmount: 30,
    };

    orderServiceMock.getOrder.mockReturnValue(mockOrder);

    const invoice = invoiceService.createInvoice('order_1');

    expect(invoice).toBeDefined();
    expect(invoice?.orderId).toBe('order_1');
    expect(invoice?.totalAmount).toBe(30);
    expect(invoice?.tax).toBeCloseTo(3);
    expect(invoice?.paid).toBe(false);

    const savedInvoice = dataStore.getOrderInvoice('order_1');
    expect(savedInvoice).toEqual(invoice);
  });

  test("ne devrait pas créer de facture si la commande n'existe pas", () => {
    orderServiceMock.getOrder.mockReturnValue(undefined);

    const invoice = invoiceService.createInvoice('order_inconnu');

    expect(invoice).toBeNull();
  });

  test('ne devrait pas créer de nouvelle facture si une facture existe déjà pour la commande', () => {
    const existingInvoiceId = 'invoice_existing';

    const mockOrder: IOrder = {
      id: 'order_2',
      customerId: 'customer_456',
      items: [{ productId: 'product_2', quantity: 1, unitPrice: 20 }],
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
      totalAmount: 20,
    };

    orderServiceMock.getOrder.mockReturnValue(mockOrder);

    dataStore.saveInvoice({
      id: existingInvoiceId,
      orderId: mockOrder.id,
      customerId: mockOrder.customerId,
      items: mockOrder.items,
      totalAmount: mockOrder.totalAmount,
      tax: 2,
      paid: false,
      createdAt: new Date(),
    });

    const invoice = invoiceService.createInvoice('order_2');

    expect(invoice).toBeDefined();
    expect(invoice?.id).toBe(existingInvoiceId);
  });
});
