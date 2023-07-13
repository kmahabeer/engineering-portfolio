const page = () => {
	const { RESUME_TMP } = process.env;
	return (
		<div className='flex justify-center min-h-screen px-4 mx-auto lg:max-w-5xl overflow-y-hidden'>
			<section className='flex lg:px-20 py-6 px-5 mb-16'>
				<object
					data={RESUME_TMP}
					type='application/pdf'
					width={900}
					height={800}
				>
					<iframe src={RESUME_TMP} width={750} height={800}></iframe>
				</object>
			</section>
		</div>
	);
};

export default page;
