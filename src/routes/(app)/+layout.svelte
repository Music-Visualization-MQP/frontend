<script>
    import { redirect } from '@sveltejs/kit';

    export let data;
    $: ({ supabase } = data);

    $: logout = async () => {
		// const { error } = await supabase.auth.signOut();
		// if (error) {
		// 	console.error(error);
		// }
        console.log(redirect(302, "/login"));
	};
</script>

<div>
    <nav>
        <ul>
            <li><a href="/display">art display</a></li>
            <li><a href="/listening">listening data</a></li>
            <li><a href="/profile">profile</a></li>
            <li><a href="/logout">logout</a></li>
        </ul>
    </nav>
    <slot></slot>
</div>