import startHTTPServer from '$startHTTPServer'
import { route } from "https://deno.land/x/functional_http_server@v0.3.1/library/route.js";

import routes from './routes.ts'

startHTTPServer(
	{ port: 4001 },
	route(routes),
)
