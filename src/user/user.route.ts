//@ts-nocheck
import { handlers, route } from "https://deno.land/x/functional_http_server@v0.3.1/library/route.js";
import Task from '$Task'
import Response from '$Response'
import {
	encodeText,
} from 'https://deno.land/x/functional@v1.3.2/library/utilities.js'

export default handlers.get('/', _ => Task.of(Response.OK({ 'content-type': 'text/plain' }, encodeText("Hello, world!"))))