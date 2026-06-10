<template>
  <div>

    <!-- Nome mobile (só aparece em telas pequenas) -->
    <div class="md:hidden text-center py-10 bg-cream border-b border-beige">
      <h1 class="font-script text-5xl text-brown">Mariana Fatur</h1>
      <p class="font-sans text-xs tracking-[0.25em] uppercase text-brown-mid mt-2">Psicóloga &nbsp;|&nbsp; CRP: 07/21477</p>
    </div>

    <section class="py-24 bg-cream">
      <div class="max-w-4xl mx-auto px-6">

        <div class="text-center mb-16">
          <p class="font-sans text-xs tracking-[0.3em] uppercase text-brown-mid mb-4">Vamos conversar</p>
          <h2 class="section-title text-4xl md:text-5xl">Agende uma conversa</h2>
          <p class="font-sans text-brown-dark/70 mt-4 text-base max-w-xl mx-auto leading-relaxed">
            O primeiro passo é o mais importante. Entre em contato e vamos juntas entender
            o que você precisa.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-16 items-start">

          <!-- Informações de contato -->
          <div class="flex flex-col gap-8">
            <div>
              <h3 class="font-serif text-xl text-brown mb-3">WhatsApp</h3>
              <a
                href="https://wa.me/5551981969035?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+conversa!"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary inline-flex items-center gap-3"
              >
                <!-- WhatsApp icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar pelo WhatsApp
              </a>
            </div>

            <div class="border-t border-beige pt-8">
              <h3 class="font-serif text-xl text-brown mb-3">Modalidade</h3>
              <p class="font-sans text-brown-dark/70 text-sm leading-relaxed">
                Atendimento 100% online via videochamada.<br>
                Atendo em todo o Brasil.
              </p>
            </div>

            <div class="border-t border-beige pt-8">
              <h3 class="font-serif text-xl text-brown mb-3">CRP</h3>
              <p class="font-sans text-brown-dark/70 text-sm">07/21477</p>
            </div>
          </div>

          <!-- Formulário de contato -->
          <form class="flex flex-col gap-5" @submit.prevent="handleSubmit">
            <div>
              <label class="block font-sans text-xs tracking-[0.15em] uppercase text-brown mb-2">Nome</label>
              <input
                v-model="form.nome"
                type="text"
                required
                placeholder="Seu nome completo"
                class="w-full bg-beige border border-brown-light/30 rounded-sm px-4 py-3 font-sans text-sm text-brown-dark focus:outline-none focus:border-brown transition-colors"
              />
            </div>
            <div>
              <label class="block font-sans text-xs tracking-[0.15em] uppercase text-brown mb-2">E-mail</label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="seu@email.com"
                class="w-full bg-beige border border-brown-light/30 rounded-sm px-4 py-3 font-sans text-sm text-brown-dark focus:outline-none focus:border-brown transition-colors"
              />
            </div>
            <div>
              <label class="block font-sans text-xs tracking-[0.15em] uppercase text-brown mb-2">Mensagem</label>
              <textarea
                v-model="form.mensagem"
                rows="5"
                required
                placeholder="Conte um pouco sobre o que você está buscando..."
                class="w-full bg-beige border border-brown-light/30 rounded-sm px-4 py-3 font-sans text-sm text-brown-dark focus:outline-none focus:border-brown transition-colors resize-none"
              ></textarea>
            </div>
            <button type="submit" class="btn-primary w-full text-center">
              Enviar mensagem
            </button>
            <p class="font-sans text-xs text-brown-dark/50 text-center leading-relaxed">
              Ou fale diretamente pelo WhatsApp para uma resposta mais rápida.
            </p>
          </form>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Contato | Psicóloga Mariana Fatur' })

const form = reactive({
  nome: '',
  email: '',
  mensagem: '',
})

// Redireciona para o WhatsApp com a mensagem preenchida
function handleSubmit() {
  const text = `Olá Mariana! Meu nome é ${form.nome}.\n\n${form.mensagem}\n\nE-mail: ${form.email}`
  const url = `https://wa.me/5551981969035?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}
</script>
