import { ref } from 'vue';
import chatbotAutomate from '@/assets/chatbot-automate.svg';
import chatbotBot from '@/assets/chatbot-bot.svg';

export const images = ref([
  chatbotAutomate,
  chatbotBot,
]);

export const contentSections = {
  0: [
    {
      title: 'Mucho mas que un software para crear chatbots',
      content: 'Un chatbot para WhatsApp es un programa de inteligencia artificial que simula una conversación con personas a través de la aplicación de mensajería instantánea. Los chatbots para WhatsApp permiten a las empresas automatizar y centralizar la comunicación con sus clientes, ofreciendo respuestas rápidas y precisas a sus consultas.',
      sectionClass: {
        class: 'section1',
        classContent: 'section1-content',
        classTitle: 'section1-title',
        classParagraph: 'section1-paragraph'
      } 
    }  
  ],
  1: [
    {
      title: 'Mejora tus resultados con chatbots en WhatsApp Business API',
      sectionClass: {
        class: 'section2',
        classContent: 'section2-content',
        classTitle: 'section2-title',
        classParagraph: 'section2-paragraph'
      },
    }  
  ],
  2: [
    {
      title: '¿Por qué necesitas un chatbot para WhatsApp?',
      content: 'Un chatbot para WhatsApp es una herramienta de comunicación que te permite automatizar y centralizar la atención al cliente, ofreciendo respuestas rápidas y precisas a sus consultas. Con un chatbot para WhatsApp podrás:',
      sectionClass: {
        class: 'section3',
        classContent: 'section3-content',
        classTitle: 'section3-title',
        classParagraph: 'section3-paragraph'
      }
    }  
  ],
  3: [
    {
      title: 'Elige la estrategia que más se adapte a ti',
      content: 'Personaliza la experiencia de tus clientes con nuestros chatbots para WhatsApp. ¿Prefieres un enfoque guiado para un control preciso y acciones simples? ¿Inteligencia Artificial para respuestas más dinámicas? ¿O una combinación de ambas? ¡Tú decides! Adaptamos tu chatbot a las necesidades únicas de tu negocio.',
      sectionClass: {
        class: 'section4',
        classContent: 'section4-content',
        classTitle: 'section4-title',
        classParagraph: 'section4-paragraph'
      }
    }  
  ],
  4: [
    {
      title: '¡Transforma tu negocio con un poderoso chatbot para WhatsApp!',
      content: 'Automatiza y optimiza la comunicación con tus clientes las 24 horas del día. Desde responder preguntas frecuentes hasta guiar a los clientes en sus compras, nuestro chatbot impulsado por inteligencia artificial hace el trabajo pesado por ti. Aprovecha esta oportunidad para aumentar tus ventas y fortalecer tu marca hoy mismo. 📱💬',
      sectionClass: {
        class: 'section5',
        classContent: 'section5-content',
        classTitle: 'section5-title',
        classParagraph: 'section5-paragraph'
      }
    }  
  ]
};

export const contentGridSection = {
  0: {
    0: [
      {
        classGrid: 'section2-grid',
        classItem: 'section2-grid-item',
        classImage: 'section2-grid-img',
        classTitle: 'section2-grid-item-tittle',
        classParagraph: 'section2-grid-item-paragraph'
      }
    ],
    1: [
      {
        title: '35%',
        content: 'Automatización de ventas en WhatsApp Business',
        },
        {
        title: '53%',
        content: 'Tasa de respuesta frente a otros canales como e-mail o SMS',
        },
        {
        title: '67%',
        content: 'Automatización de consultas recibidas a través de WhatsApp',
        }
    ]
  },
  1: {
    0: [
      {
        classGrid: 'section3-grid',
        classItem: 'section3-grid-item',
        classImage: 'section3-grid-img',
        classTitle: 'section3-grid-item-tittle',
        classParagraph: 'section3-grid-item-paragraph'

      }
    ],
    1: [
      {
        title: 'Automatiza tu atención al cliente',
        content: 'Con un chatbot para WhatsApp podrás responder preguntas frecuentes, guiar a tus clientes en sus compras y mucho más.',
        image: chatbotAutomate,
      },
      {
        title: 'Gestiona tus conversaciones',
        content: 'Con un chatbot para WhatsApp podrás responder preguntas frecuentes, guiar a tus clientes en sus compras y mucho más.',
        image: chatbotAutomate,
      },
      {
        title: 'Crea un chatbot para WhatsApp',
        content: 'Con nuestro chatbot para WhatsApp podrás responder preguntas frecuentes, guiar a tus clientes en sus compras y mucho más.',
        image: chatbotBot,
      },
      {
        title: 'Transferencias rápidas y sencillas a agentes',
        content: 'Con nuestro chatbot para WhatsApp podrás responder preguntas frecuentes, guiar a tus clientes en sus compras y mucho más.',
        image: chatbotBot
      }
    ]
  },
  2:{
    0: [
      {
        classGrid: 'section4-grid',
        classItem: 'section4-grid-item',
        classImage: 'section4-grid-img',
        classTitle: 'section4-grid-item-tittle',
        classParagraph: 'section4-grid-item-paragraph'

      }
    ],
    1: [
      {
        title: 'Chatbots guiados',
        content: 'Con un chatbot para WhatsApp podrás responder preguntas frecuentes, guiar a tus clientes en sus compras y mucho más.',
        image: chatbotAutomate,
      },
      {
        title: 'Chatbots con IA para WhatsApp',
        content: 'Con un chatbot para WhatsApp podrás responder preguntas frecuentes, guiar a tus clientes en sus compras y mucho más.',
        image: chatbotAutomate,
      }
    ]
  },
};
