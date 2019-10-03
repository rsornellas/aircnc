<template>
  <div class="container">
    <Logo />
    <div class="content">
      <p>
        Ofereça
        <strong>spots</strong> para programadores e encontre
        <strong>talentos</strong> para sua empresa
      </p>
      <form>
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="Seu melhor email" />
        <button class="btn" type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo'
export default {
  name: 'login',
  components: {
    Logo
  }
}
</script>
<style>
</style>
