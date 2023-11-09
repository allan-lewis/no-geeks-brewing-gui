const API_URL = 'https://api.nogeeksbrewing.com/graphql'

/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/graphql',
				destination: `${API_URL}`,
			},
		]
	},
	output: 'standalone'
}

module.exports = nextConfig
