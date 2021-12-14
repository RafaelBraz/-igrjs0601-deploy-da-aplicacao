import Prismic from '@prismicio/client'

/*
	É recomendado pelo próprio prismic sempre abrir uma nova conexão com a API
	sempre que for fazer uma requisição (ao invés de apenas reutilizar a conexão
	de uma chama em outras chamadas)
*/
export function getPrismicClient(req?: unknown) {
	const prismic = Prismic.client(
		process.env.PRISMIC_ENDPOINT,
		{
			req,
			accessToken: process.env.PRISMIC_ACCESS_TOKEN
		}
	)

	return prismic
}
