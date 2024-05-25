import type { Router, Response } from 'express';
import type { Route } from '../types/route.interface';


export interface Controller {
  readonly router: Router;
  addRoute(route: Route): void;
  send<T>(res: Response, statusCode: number, data: T): void;
  ok<T>(res: Response, data: T): void;
  created<T>(res: Response, data: T): void;
  noContent<T>(res: Response, data: T): void;
  notFound<T>(res: Response, data: T): void;
  badRequest<T>(res: Response, data: T): void;
}
