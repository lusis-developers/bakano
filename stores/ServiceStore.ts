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
        projectTitle: 'Créditos Chubut',
        projectDescription: 'Este chatbot inteligente fue diseñado para evaluar automáticamente la elegibilidad de los usuarios para créditos en Argentina. Con sofisticados algoritmos de decisión, el bot analiza los datos del usuario y determina si es apto para un crédito, permitiendo ofrecer un monto máximo y plazos personalizados en cuestión de minutos.',
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
        ],
        socialMedia: [
          {
            icon: 'fa-brands fa-instagram',
            link: 'https://www.instagram.com/creditoschubutok'
          },
          {
            icon: 'fa-solid fa-globe',
            link: 'https://creditoschubut.com/'
          }
        ]
      },
      {
        projectImage: 'https://shine.creativemox.com/workio/wp-content/uploads/sites/14/2024/08/macarons-in-gift-box-mockup-on-a-light-background.jpg',
        projectType: 'CHATBOT',
        projectTitle: 'Zami',
        projectDescription: 'Este chatbot fue desarrollado utilizando la base de datos completa de Zami.es, una tienda líder en la venta de calzado. El chatbot no solo brinda soporte y consultas personalizadas a los usuarios, sino que también ofrece la posibilidad de realizar un seguimiento preciso de cada pedido a través de parámetros',
        projectSubTitle: 'Detalles del proyecto:',
        details: [
          {
            title: 'Ubicación',
            detail: 'España',
          },
          {
            title: 'Tiempo de entrega',
            detail: 'Tres meses',
          },
        ],
        socialMedia: [
          {
            icon: 'fa-brands fa-instagram',
            link: 'https://www.instagram.com/zami_es/'
          },
          {
            icon: 'fa-solid fa-globe',
            link: 'https://www.zapatillas-minimalistas.com/es/'
          }
        ]
      },
      {
        projectImage: 'https://www.alzheimerneuroactivo.com/neuroactivo/wp-content/uploads/2022/11/LOGO-NEUROACTIVO-1-01.png',
        projectType: 'CHATBOT',
        projectTitle: 'Neuroactivo',
        projectDescription: 'Con NeuroActivo, desarrollamos un chatbot avanzado que recopila y procesa los datos de cada paciente y su acompañante en tiempo real. Este chatbot ofrece días y horarios disponibles en función de la sede seleccionada y la disponibilidad, todo ello directamente a través de el chat para mayor comodidad y eficiencia.',
        projectSubTitle: 'Detalles del proyecto:',
        details: [
          {
            title: 'Ubicación',
            detail: 'Colombia'
          },
          {
            title: 'Tiempo de entrega',
            detail: '2 semanas'
          },
        ],
        socialMedia: [
          {
            icon: 'fa-brands fa-instagram',
            link: 'https://www.instagram.com/neuroactivo/'
          },
          {
            icon: 'fa-solid fa-globe',
            link: 'https://www.alzheimerneuroactivo.com/'
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
