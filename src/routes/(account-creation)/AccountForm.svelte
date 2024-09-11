<script lang="ts">
    export let type: "login" | "register";
</script>

<div>
    <h1>welcome!</h1>
    <form method="POST" action={"/" + type}>
        <fieldset>
            <input type="text" name="email" id="email" placeholder="username">
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

    h1 {
        font-size: 30px;
    }

    /* input elements */
    input[type="text"], input[type="password"] {
        background-color: var(--background);
        border: 2px solid var(--medium);
        border-radius: 5px;
        font-family: "Archivo", sans-serif;
        font-size: 15px;
        padding: 2px 5px;
        color: var(--text);
    }

    input[type="submit"] {
        width: 100%;
        height: 40px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        color: var(--background);
        background-color: var(--accent);
        font-family: "Mattone", sans-serif;
        font-size: 15px;
    }

    ::placeholder {
        color: var(--text);
    }
</style>