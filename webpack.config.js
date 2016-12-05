module.exports={

	entry:{
		index:"./index.js"

	},
	output:{
		filename:"dist.js",
		path:"./dist"	
	},


	module: {
		loaders: [

			{
				test:/\.js/,
				loader:"babel-loader"

			}

		]


	}


}