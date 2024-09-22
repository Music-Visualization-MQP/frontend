<script lang="ts">
    export let type: "login" | "register";
</script>

<div>
    <h1>welcome!</h1>
    <form method="POST" action={"?/" + type}>
        <fieldset>
            <input type="text" name="email" id="email" placeholder="email">
            <input type="password" name="password" id="password" placeholder="password">
            {#if type === "register"}
                <input type="password" name="confirm_password" id="confirm_password" placeholder="confirm password">
            {/if}
        </fieldset>
        <fieldset>
            <input type="submit" value={type === "login" ? "sign in" : "get started"}>
            {#if type === "login"}
                <a href="register">don't have an account?</a>
            {:else}
                <a href="login">already have an account?</a>
            {/if}
        </fieldset>
    </form>
</div>

<style>
    /* alignment */
    div, form, fieldset {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div, form {
        gap: 100px;
    }

    fieldset {
        gap: 10px;
    }
</style>