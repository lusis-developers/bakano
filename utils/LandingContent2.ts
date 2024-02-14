import chatbotAutomate from '@/assets/chatbot-automate.svg';
import chatbotBot from '@/assets/chatbot-bot.svg';

export const images = ref([
  chatbotAutomate,
  chatbotBot,
]);

export const contentSections2 = [
  {
    flexClasses: [
      {
        classContainer: 'flex1-container',
        classItem: 'flex1-item',
        classImage: 'image1',
        classTitle: 'flex1-item-title',
        classParagraph: 'flex1-item-paragraph'
      }
    ],
    principalContent: [
      {
        title: 'Mejora tus resultados con chatbots en WhatsApp Business API',
      }
    ],
    flexContent: [
      {
        title: '35%',
        paragraph: 'Automatización de ventas en WhatsApp Business'
      },
      {
        title: '53%',
        paragraph: 'Tasa de respuesta frente a otros canales como e-mail o SMS'
      },
      {
        title: '67%',
        paragraph: 'Automatización de consultas recibidas a través de WhatsApp'
      }
    ]
  },
  {
    flexClasses: [
      {
        classContainer: 'flex2-container',
        classItem: 'flex2-item',
        classImage: 'image2',
        classTitle: 'flex2-item-title',
        classParagraph: 'flex2-item-paragraph'
      }
    ],
    principalContent: [
      {
        title: '¿Por qué necesitas un chatbot para WhatsApp?',
        paragraph: 'Un chatbot para WhatsApp es una herramienta de comunicación que te permite automatizar y centralizar la atención al cliente, ofreciendo respuestas rápidas y precisas a sus consultas. Con un chatbot para WhatsApp podrás:'
      }
    ],
    flexContent: [
      {
        image: chatbotBot,
        title: 'Automatiza tu atención al cliente',
        paragraph: 'Con un chatbot para WhatsApp podrás responder preguntas frecuentes, guiar a tus clientes en sus compras y mucho más.'
      },
      {
        image: chatbotBot,
        title: 'Gestiona tus conversaciones',
        paragraph: 'Con un chatbot para WhatsApp podrás responder preguntas frecuentes, guiar a tus clientes en sus compras y mucho más.'
      },
      {
        image: chatbotAutomate,
        title: 'Crea un chatbot para WhatsApp',
        paragraph: 'Con nuestro chatbot para WhatsApp podrás responder preguntas frecuentes, guiar a tus clientes en sus compras y mucho más.'
      },
      {
        image: chatbotAutomate,
        title: 'Transferencias rápidas y sencillas a agentes',
        paragraph: 'Con nuestro chatbot para WhatsApp podrás responder preguntas frecuentes, guiar a tus clientes en sus compras y mucho más.'
      }
    ]
  },
  {
    flexClasses: [
      {
        classContainer: 'flex3-container',
        classItem: 'flex3-item',
        classImage: 'image3',
        classTitle: 'flex3-item-title',
        classParagraph: 'flex3-item-paragraph'
      }
    ],
    principalContent: [
      {
        title: 'Elige la estrategia que más se adapte a ti',
        paragraph: 'Personaliza la experiencia de tus clientes con nuestros chatbots para WhatsApp. ¿Prefieres un enfoque guiado para un control preciso y acciones simples? ¿Inteligencia Artificial para respuestas más dinámicas? ¿O una combinación de ambas? ¡Tú decides! Adaptamos tu chatbot a las necesidades únicas de tu negocio.'
      }
    ],
    flexContent: [
      {
        image: chatbotBot,
        title: 'Chatbots guiados',
        paragraph: 'Con un chatbot para WhatsApp podrás responder preguntas frecuentes, guiar a tus clientes en sus compras y mucho más.'
      },
      {
        image: chatbotBot,
        title: 'Chatbots con IA para WhatsApp',
        paragraph: 'Con un chatbot para WhatsApp podrás responder preguntas frecuentes, guiar a tus clientes en sus compras y mucho más.'
      }
    ]
  }
]