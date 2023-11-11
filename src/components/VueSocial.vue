<template>
    <VueSocialChat
      icon
      class="whatsapp-chat"
      :attendants="attendants"
    >
      <template v-slot:header>
        <p>Hire a UI/UX Specialist Today!</p>
      </template>
      
      <template  v-slot:button>
        <img
          src="https://raw.githubusercontent.com/ktquez/vue-social-chat/master/src/icons/whatsapp.svg"
          alt="icon whatsapp"
          aria-hidden="true"
        >
      </template>
      <template v-slot:footer>
        <small  >
          <v-icon color="secondary" icon="mdi-phone"></v-icon>
          Reach me at
          <a href="tel:+526381134196" title="Call us">(+52) 638-113-4196</a>
          <br>
          <v-icon icon="mdi-clock"></v-icon>
          from 10:00am a 6:00pm (PST)
        </small>
      </template>
    </VueSocialChat>
  </template>
  
  <script>
  export default {
    name: 'WhatsAppPage',
    setup () {
      const attendants = [
        {
          app: 'whatsapp',
          label: 'Software Developer | UI/UX',
          name: 'Abraham Felix',
          number: '526381134196',
          avatar: {
            src: 'https://avatars.githubusercontent.com/u/38101725?s=400&u=d3e5a594469e4faa6bf35b6e86bcfa414fe785ce&v=4',
            alt: 'Abraham Felix Avatar'
          }
        }
      ]
  
      return { attendants }
    }
  }
  </script>
  
  <style lang="stylus">
  .whatsapp-chat
    --whatsapp black
    --vsc-bg-header var(--whatsapp)
    --vsc-bg-button var(--whatsapp)
    --vsc-outline-color var(--whatsapp)
  
    .vsc-popup-header p
      font-weight 500

  
    button.vsc-popup-button.vsc-popup-button--default {
        text-align: -webkit-center !important;
        margin-bottom: 50px;
    }
    .vsc-popup-footer, .vsc-popup-body  {
      background: black ;
    }
    .vsc-popup-body__link  {
      color:white ;
    }
    

    @media screen and (max-width: 550px) {
      button.vsc-popup-button.vsc-popup-button--default {
        margin-bottom: 90px;
    }
    }
  .vsc-popup-body__link:focus, .vsc-popup-body__link:hover {
    background-color: black;
    border: 1px white solid;
    color:white
}
  </style>