<template>
  <div>
    <form>
      <ul>
        <li>
          <label for="name">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="What's your name?"
            id="name"
            required
          />
        </li>
        <li>
          <label for="email">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="What's your email?"
            required
          />
        </li>
        <li>
          <label for="email">Your Email</label>
          <textarea
            type="text"
            name="email"
            placeholder="What's your message?"
            rows="5"
            required
          ></textarea>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
setup() {
    return {

    }
}
</script>
