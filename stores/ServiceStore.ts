import { defineStore } from 'pinia';
import type { Service } from '~/interfaces/Services.interface';

interface RootState {
  services: Service[];
  error: string | null;
  isLoading: boolean;
}

export const useServiceStore = defineStore('ServiceStore', {
  state: (): RootState => ({
    services: [
      {
        projectImage: 'https://shine.creativemox.com/workio/wp-content/uploads/sites/14/2024/08/macarons-in-gift-box-mockup-on-a-light-background.jpg',
        projectType: 'CHATBOT',
        projectTitle: 'Crédito Express Argentina',
        projectDescription: 'Nuestro chatbot inteligente ha sido diseñado para evaluar automáticamente la elegibilidad de los usuarios para créditos en Argentina. Con sofisticados algoritmos de decisión, el bot analiza los datos del usuario y determina si es apto para un crédito, permitiendo ofrecer un monto máximo y plazos personalizados en cuestión de segundos.',
        projectSubTitle: 'Detalles del proyecto:',
        details: [
          {
            title: 'Ubicación',
            detail: 'Argentina'
          },
          {
            title: 'Tiempo de entrega',
            detail: 'Dos meses'
          },
          {
            title: 'Presupuesto',
            detail: '$3000 USD'
          }
        ]
      },
      {
        projectImage: 'https://shine.creativemox.com/workio/wp-content/uploads/sites/14/2024/08/macarons-in-gift-box-mockup-on-a-light-background.jpg',
        projectType: 'E-COMMERCE',
        projectTitle: 'Tienda Online Global',
        projectDescription: 'Desarrollamos una tienda en línea con capacidad para manejar miles de productos, integraciones de pago seguras, y opciones de envío global. La tienda está optimizada para dispositivos móviles y ofrece una experiencia de usuario excepcional.',
        projectSubTitle: 'Detalles del proyecto:',
        details: [
          {
            title: 'Ubicación',
            detail: 'Global'
          },
          {
            title: 'Tiempo de entrega',
            detail: 'Tres meses'
          },
          {
            title: 'Presupuesto',
            detail: '$15000 USD'
          }
        ]
      }
    ],
    error: null,
    isLoading: false,
  }),

  actions: {
    getServices(): Service[] {
      return this.services;
    },

    getServiceByTitle(title: string): Service | undefined {
      return this.services.find(service => service.projectTitle === title);
    },

    addService(service: Service): void {
      this.services.push(service);
    },

    updateService(title: string, updatedService: Partial<Service>): void {
      const serviceIndex = this.services.findIndex(service => service.projectTitle === title);
      if (serviceIndex !== -1) {
        this.services[serviceIndex] = { ...this.services[serviceIndex], ...updatedService };
      } else {
        this.error = `Service with title ${title} not found.`;
      }
    },

    deleteService(title: string): void {
      this.services = this.services.filter(service => service.projectTitle !== title);
    },
  },
});

export default useServiceStore;
