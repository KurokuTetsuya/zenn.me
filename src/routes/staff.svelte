<script>
    import { get } from "superagent";
    const roles = {
        owner: "735044850155651093",
        staff: "735062535383810129"
    }
    async function getList() {
        const { body: owners } = await get(`https://api.frutbits.xyz/staffList?role=${roles.owner}`);
        const { body: staff } = await get(`https://api.frutbits.xyz/staffList?role=${roles.staff}`);
        return { owners, staff }
    }
    let res = getList();
</script>
<div className="container">
    <div className="staff-list mt-5 mb-5 text-center">
        <h1>Staff Team</h1>
        {#await res}
            <!-- Nothing -->
        {:then result} 
            <section class="p-md-3 mx-md-5 text-lg-left">
                <div id={roles.owner} class="row justify-content-center mb-5">
                    {#each result.owners.list as owner}
                        <div class="row d-flex align-items-center border py-2 mx-1 my-1 staff-item" style="border-radius: 15px">
                            <div class="col-4 avatar w-100 white d-flex justify-content-center align-items-center z-depth-1">
                                <img src={owner.displayAvatarURL} alt={owner.username} class="img-fluid rounder-circle z-depth-1">
                            </div>
                            <div class="col-8">
                                <h6 class="font-weight-bold pt-2">{owner.username}#{owner.discriminator}</h6>
                                <p>{owner.role.name}</p>
                            </div>
                        </div>
                    {/each}
                </div>
                <br/>
                <div id={roles.staff} className="row justify-content-center mb-5">
                    {#each result.staff.list as staff}
                        <div class="row d-flex align-items-center border rounded py-2 mx-1 my-1 staff-item">
                            <div class="col-4 avatar w-100 white d-flex justify-content-center align-items-center z-depth-1">
                                <img src={staff.displayAvatarURL} alt={staff.username} class="img-fluid rounder-circle z-depth-1">
                            </div>
                            <div class="col-8">
                                <h6 class="font-weight-bold pt-2">{staff.username}#{staff.discriminator}</h6>
                                <p>{staff.role.name}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            </section>
        {/await}
        <!-- <section className="p-md-3 mx-md-5 text-lg-left">
            <div id={roles.owner} className="row justify-content-center mb-5">
                {res.owners.list.map(o => (
                    <div className="row d-flex align-items-center border rounded py-2 mx-1 my-1 staff-item">
                        <div className="col-4 avatar w-100 white d-flex justify-content-center align-items-center">
                            <img src={o.displayAvatarURL} alt={o.username} className="img-fluid rounded-circle z-depth-1"></img>
                        </div>
                        <div className="col-8">
                            <h6 className="font-weight-bold pt-2">{o.username}#{o.discriminator}</h6>
                            <p>{o.role.name}</p>
                        </div>
                    </div>
                ))}
                <br/>
            </div>
            <div id={roles.staff} className="row justify-content-center mb-5">
                {staff.list.map(o => (
                    <div className="row d-flex align-items-center border rounded py-2 mx-1 my-1 staff-item">
                        <div className="col-4 avatar w-100 white d-flex justify-content-center align-items-center">
                            <img src={o.displayAvatarURL} alt={o.username} className="img-fluid rounded-circle z-depth-1"></img>
                        </div>
                        <div className="col-8">
                            <h6 className="font-weight-bold pt-2">{o.username}#{o.discriminator}</h6>
                            <p>{o.role.name}</p>
                        </div>
                    </div>
                ))}
                <br/>
            </div>
        </section> --->
    </div>
</div>