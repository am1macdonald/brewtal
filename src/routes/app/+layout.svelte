<script lang="ts">
    import HeaderBar from "$lib/components/layout/HeaderBar.svelte";
    import AppSidePanel from "$lib/components/layout/AppSidePanel.svelte";
    import SideNavigation from "$lib/components/unique/LeftSideNavigation.svelte";
</script>
<div class="h-screen w-screen flex flex-col justify-start items-center">
    <HeaderBar></HeaderBar>

    <div class="flex flex-row justify-between w-screen pt-12">
        <AppSidePanel>
            <SideNavigation></SideNavigation>
        </AppSidePanel>
        <slot/>
        <AppSidePanel></AppSidePanel>
    </div>
</div>