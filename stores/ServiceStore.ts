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
        projectImage: 'https://i.pinimg.com/564x/a3/3c/02/a33c02b222079017a1ba4b7b50f99e7d.jpg',
        projectType: 'CHATBOT',
        projectTitle: 'Créditos Chubut',
        projectDescription: 'Este chatbot inteligente fue diseñado para evaluar automáticamente la elegibilidad de los usuarios para créditos en Argentina. Con sofisticados algoritmos de decisión, el bot analiza los datos del usuario y determina si es apto para un crédito, permitiendo ofrecer un monto máximo y plazos personalizados en cuestión de minutos.',
        projectSubTitle: 'Detalles del proyecto:',
        videoDemo: 'https://youtu.be/pskfqXB00aE?si=oCgR_3O31_cecJcy',
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
        projectImage: 'https://i.pinimg.com/564x/f3/07/38/f307389f2034ac6349c65d3d6b34b637.jpg',
        projectType: 'CHATBOT',
        projectTitle: 'Zami',
        videoDemo: 'https://www.youtube.com/watch?v=pskfqXB00aE',
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
        projectImage: 'https://i.pinimg.com/564x/04/8b/d4/048bd44fc7afb8e3cc9d931283151531.jpg',
        projectType: 'CHATBOT',
        projectTitle: 'Neuroactivo',
        videoDemo: '',
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
      },
      {
        projectImage: 'https://i.pinimg.com/564x/52/91/7c/52917c34da433418fda46f8adb786d74.jpg',
        projectType: 'CHATBOT',
        projectTitle: 'Fudibot',
        videoDemo: 'https://www.youtube.com/watch?v=gSbu_v9Sdpg',
        projectDescription: 'Con Fudibot, los restaurantes pueden expandir sus canales de ventas mediante un chatbot de WhatsApp que gestiona de manera eficiente la toma de pedidos, la automatización de envíos a domicilio, y el proceso de cobro y notificaciones, todo en una única plataforma integrada.',
        projectSubTitle: 'Detalles del proyecto:',
        details: [
          {
            title: 'Ubicación',
            detail: 'Ecuador | Colombia | México | Chile'
          },
          {
            title: 'Tiempo de entrega',
            detail: '2 semanas'
          },
        ],
        socialMedia: [
          {
            icon: 'fa-brands fa-instagram',
            link: 'https://www.instagram.com/fudibot.ec/'
          },
          {
            icon: 'fa-solid fa-globe',
            link: 'https://www.fudibot.com/'
          }
        ]
      },
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
