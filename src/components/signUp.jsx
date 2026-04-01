export default function SignUp() {

    function formDataHandler(formData) {
        const data = Object.fromEntries(formData.entries())
        const dietary = formData.getAll("dietary")
        const allData = {...data, dietary}
        console.log(allData)
    }
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center my-5">SignUp Form</h1>

            <form action={formDataHandler} className="px-8 m-4">

                <label className="block" htmlFor="email">Email:</label>
                <input className="bg-white mb-4 border rounded-full px-2 w-full" type="email" id="email" name="email" placeholder="Joe@example.com" required />

                <label className="block" htmlFor="password">Password:</label>
                <input className="bg-white mb-4 border rounded-full px-2 w-full" type="password" id="password" name="password" required />

                <label className="block" htmlFor="description">Description:</label>
                <textarea className="bg-white mb-4 border px-2 w-full" id="description" name="description" rows={1} required placeholder="Your description..."/> 

                <fieldset className="my-4 pl-4 border">
                    <legend className="px-1">Employment Status:</legend>
                    <label className="block my-1" htmlFor="employed">
                        <input className="mr-1" type="radio" id="employed" name="employment" value="employed" required />
                        Employed</label>
                    <label className="block my-1" htmlFor="unemployed">
                        <input className="mr-1" type="radio" id="unemployed" name="employment" value="unemployed" required />
                        Unemployed</label>
                    <label className="block my-1" htmlFor="student">
                        <input className="mr-1" type="radio" id="student" name="employment" value="student" required />
                        Student</label>
                </fieldset>

                <fieldset className="my-4 pl-4 border">
                    <legend className="px-1"> Dietary Restrictions: </legend>
                    <label className="block my-1" htmlFor="vegetarian">
                        <input className="mr-1" type="checkbox" id="vegetarian" name="dietary" value="vegetarian"/>
                        Vegetarian</label>
                    <label className="block my-1" htmlFor="vegan">
                        <input className="mr-1" type="checkbox" id="vegan" name="dietary" value="vegan"/>
                        Vegan</label>
                    <label className="block my-1" htmlFor="gluten-free">
                        <input className="mr-1" type="checkbox" id="gluten-free" name="dietary" value="gluten-free"/>
                        Gluten-Free</label>
                </fieldset>

                <label className="block" htmlFor="department">Department:</label>
                <select className="w-full border bg-white mt-1 my-4"  id="department" name="department" required defaultValue="">
                    <option disabled value="">--Choose a department--</option>
                    <option value="sales">Sales</option>
                    <option value="marketing">Marketing</option>
                    <option value="engineering">Engineering</option>
                </select>

                <button className="w-full border rounded-full mt-4 bg-white font-semibold py-0.5 text-lg">Submit</button>

            </form>
        </div>
    )
}