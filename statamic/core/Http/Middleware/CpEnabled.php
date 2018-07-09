<?php

namespace Statamic\Http\Middleware;

use Closure;
use Statamic\Http\Controllers\StatamicController;

class CpEnabled
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (env('DISABLE_CP')) {
            return app()->call(StatamicController::class.'@index', ['segments' => $request->path()]);
        }

        $response = $next($request);

        $response->headers->set('Cache-Control','nocache, no-store, max-age=0, must-revalidate');
        $response->headers->set('Pragma','no-cache');
        $response->headers->set('Expires','Fri, 01 Jan 1990 00:00:00 GMT');

        return $response;
    }
}
