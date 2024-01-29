import LoginForm from "@/components/form/LoginForm"

export default function Login() {

	return (
		<div className="w-[100vw] lg:max-w-[1920px] bg-black  flex h-[100vh] text-white">

			<div className="left-div  w-[50%] flex items-center justify-center ">
				<LoginForm />
			</div>

			<div className="right-div w-[50%] flex items-center justify-center">
				<h1 className="text-5xl font-bold">SparkSync</h1>
			</div>
		</div>

	)

}
