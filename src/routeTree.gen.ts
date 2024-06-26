/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as AuthImport } from './routes/_auth'
import { Route as IndexImport } from './routes/index'
import { Route as AuthUsersImport } from './routes/_auth.users'
import { Route as AuthTransferRequestsImport } from './routes/_auth.transfer-requests'
import { Route as AuthSuppliersImport } from './routes/_auth.suppliers'
import { Route as AuthStoreImport } from './routes/_auth.store'
import { Route as AuthPurchaseOrdersImport } from './routes/_auth.purchase-orders'
import { Route as AuthProductsImport } from './routes/_auth.products'
import { Route as AuthDashboardImport } from './routes/_auth.dashboard'
import { Route as AuthUsersIndexImport } from './routes/_auth.users.index'
import { Route as AuthSuppliersIndexImport } from './routes/_auth.suppliers.index'
import { Route as AuthStoreIndexImport } from './routes/_auth.store.index'
import { Route as AuthPurchaseOrdersIndexImport } from './routes/_auth.purchase-orders.index'
import { Route as AuthProductsIndexImport } from './routes/_auth.products.index'
import { Route as AuthUsersCreateImport } from './routes/_auth.users.create'
import { Route as AuthStoreTransferRequestsImport } from './routes/_auth.store.transfer-requests'
import { Route as AuthStoreIdImport } from './routes/_auth.store.$id'
import { Route as AuthPurchaseOrdersCreateImport } from './routes/_auth.purchase-orders.create'
import { Route as AuthPurchaseOrdersIdImport } from './routes/_auth.purchase-orders.$id'
import { Route as AuthProductsUnitImport } from './routes/_auth.products.unit'
import { Route as AuthProductsCreateImport } from './routes/_auth.products.create'
import { Route as AuthProductsCategoryImport } from './routes/_auth.products.category'
import { Route as AuthProductsBrandsImport } from './routes/_auth.products.brands'
import { Route as AuthProductsIdImport } from './routes/_auth.products.$id'
import { Route as AuthStoreIdIndexImport } from './routes/_auth.store.$id.index'
import { Route as AuthStoreIdTransferRequestsImport } from './routes/_auth.store.$id.transfer-requests'
import { Route as AuthStoreIdProductImport } from './routes/_auth.store.$id.$product'
import { Route as AuthPurchaseOrdersIdGrnImport } from './routes/_auth.purchase-orders.$id.grn'
import { Route as AuthStoreIdTransferRequestsCreateImport } from './routes/_auth.store.$id.transfer-requests.create'
import { Route as AuthStoreIdTransferRequestsTridImport } from './routes/_auth.store.$id.transfer-requests.$trid'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthUsersRoute = AuthUsersImport.update({
  path: '/users',
  getParentRoute: () => AuthRoute,
} as any)

const AuthTransferRequestsRoute = AuthTransferRequestsImport.update({
  path: '/transfer-requests',
  getParentRoute: () => AuthRoute,
} as any)

const AuthSuppliersRoute = AuthSuppliersImport.update({
  path: '/suppliers',
  getParentRoute: () => AuthRoute,
} as any)

const AuthStoreRoute = AuthStoreImport.update({
  path: '/store',
  getParentRoute: () => AuthRoute,
} as any)

const AuthPurchaseOrdersRoute = AuthPurchaseOrdersImport.update({
  path: '/purchase-orders',
  getParentRoute: () => AuthRoute,
} as any)

const AuthProductsRoute = AuthProductsImport.update({
  path: '/products',
  getParentRoute: () => AuthRoute,
} as any)

const AuthDashboardRoute = AuthDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => AuthRoute,
} as any)

const AuthUsersIndexRoute = AuthUsersIndexImport.update({
  path: '/',
  getParentRoute: () => AuthUsersRoute,
} as any)

const AuthSuppliersIndexRoute = AuthSuppliersIndexImport.update({
  path: '/',
  getParentRoute: () => AuthSuppliersRoute,
} as any)

const AuthStoreIndexRoute = AuthStoreIndexImport.update({
  path: '/',
  getParentRoute: () => AuthStoreRoute,
} as any)

const AuthPurchaseOrdersIndexRoute = AuthPurchaseOrdersIndexImport.update({
  path: '/',
  getParentRoute: () => AuthPurchaseOrdersRoute,
} as any)

const AuthProductsIndexRoute = AuthProductsIndexImport.update({
  path: '/',
  getParentRoute: () => AuthProductsRoute,
} as any)

const AuthUsersCreateRoute = AuthUsersCreateImport.update({
  path: '/create',
  getParentRoute: () => AuthUsersRoute,
} as any)

const AuthStoreTransferRequestsRoute = AuthStoreTransferRequestsImport.update({
  path: '/transfer-requests',
  getParentRoute: () => AuthStoreRoute,
} as any)

const AuthStoreIdRoute = AuthStoreIdImport.update({
  path: '/$id',
  getParentRoute: () => AuthStoreRoute,
} as any)

const AuthPurchaseOrdersCreateRoute = AuthPurchaseOrdersCreateImport.update({
  path: '/create',
  getParentRoute: () => AuthPurchaseOrdersRoute,
} as any)

const AuthPurchaseOrdersIdRoute = AuthPurchaseOrdersIdImport.update({
  path: '/$id',
  getParentRoute: () => AuthPurchaseOrdersRoute,
} as any)

const AuthProductsUnitRoute = AuthProductsUnitImport.update({
  path: '/unit',
  getParentRoute: () => AuthProductsRoute,
} as any)

const AuthProductsCreateRoute = AuthProductsCreateImport.update({
  path: '/create',
  getParentRoute: () => AuthProductsRoute,
} as any)

const AuthProductsCategoryRoute = AuthProductsCategoryImport.update({
  path: '/category',
  getParentRoute: () => AuthProductsRoute,
} as any)

const AuthProductsBrandsRoute = AuthProductsBrandsImport.update({
  path: '/brands',
  getParentRoute: () => AuthProductsRoute,
} as any)

const AuthProductsIdRoute = AuthProductsIdImport.update({
  path: '/$id',
  getParentRoute: () => AuthProductsRoute,
} as any)

const AuthStoreIdIndexRoute = AuthStoreIdIndexImport.update({
  path: '/',
  getParentRoute: () => AuthStoreIdRoute,
} as any)

const AuthStoreIdTransferRequestsRoute =
  AuthStoreIdTransferRequestsImport.update({
    path: '/transfer-requests',
    getParentRoute: () => AuthStoreIdRoute,
  } as any)

const AuthStoreIdProductRoute = AuthStoreIdProductImport.update({
  path: '/$product',
  getParentRoute: () => AuthStoreIdRoute,
} as any)

const AuthPurchaseOrdersIdGrnRoute = AuthPurchaseOrdersIdGrnImport.update({
  path: '/grn',
  getParentRoute: () => AuthPurchaseOrdersIdRoute,
} as any)

const AuthStoreIdTransferRequestsCreateRoute =
  AuthStoreIdTransferRequestsCreateImport.update({
    path: '/create',
    getParentRoute: () => AuthStoreIdTransferRequestsRoute,
  } as any)

const AuthStoreIdTransferRequestsTridRoute =
  AuthStoreIdTransferRequestsTridImport.update({
    path: '/$trid',
    getParentRoute: () => AuthStoreIdTransferRequestsRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_auth/dashboard': {
      id: '/_auth/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthDashboardImport
      parentRoute: typeof AuthImport
    }
    '/_auth/products': {
      id: '/_auth/products'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof AuthProductsImport
      parentRoute: typeof AuthImport
    }
    '/_auth/purchase-orders': {
      id: '/_auth/purchase-orders'
      path: '/purchase-orders'
      fullPath: '/purchase-orders'
      preLoaderRoute: typeof AuthPurchaseOrdersImport
      parentRoute: typeof AuthImport
    }
    '/_auth/store': {
      id: '/_auth/store'
      path: '/store'
      fullPath: '/store'
      preLoaderRoute: typeof AuthStoreImport
      parentRoute: typeof AuthImport
    }
    '/_auth/suppliers': {
      id: '/_auth/suppliers'
      path: '/suppliers'
      fullPath: '/suppliers'
      preLoaderRoute: typeof AuthSuppliersImport
      parentRoute: typeof AuthImport
    }
    '/_auth/transfer-requests': {
      id: '/_auth/transfer-requests'
      path: '/transfer-requests'
      fullPath: '/transfer-requests'
      preLoaderRoute: typeof AuthTransferRequestsImport
      parentRoute: typeof AuthImport
    }
    '/_auth/users': {
      id: '/_auth/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof AuthUsersImport
      parentRoute: typeof AuthImport
    }
    '/_auth/products/$id': {
      id: '/_auth/products/$id'
      path: '/$id'
      fullPath: '/products/$id'
      preLoaderRoute: typeof AuthProductsIdImport
      parentRoute: typeof AuthProductsImport
    }
    '/_auth/products/brands': {
      id: '/_auth/products/brands'
      path: '/brands'
      fullPath: '/products/brands'
      preLoaderRoute: typeof AuthProductsBrandsImport
      parentRoute: typeof AuthProductsImport
    }
    '/_auth/products/category': {
      id: '/_auth/products/category'
      path: '/category'
      fullPath: '/products/category'
      preLoaderRoute: typeof AuthProductsCategoryImport
      parentRoute: typeof AuthProductsImport
    }
    '/_auth/products/create': {
      id: '/_auth/products/create'
      path: '/create'
      fullPath: '/products/create'
      preLoaderRoute: typeof AuthProductsCreateImport
      parentRoute: typeof AuthProductsImport
    }
    '/_auth/products/unit': {
      id: '/_auth/products/unit'
      path: '/unit'
      fullPath: '/products/unit'
      preLoaderRoute: typeof AuthProductsUnitImport
      parentRoute: typeof AuthProductsImport
    }
    '/_auth/purchase-orders/$id': {
      id: '/_auth/purchase-orders/$id'
      path: '/$id'
      fullPath: '/purchase-orders/$id'
      preLoaderRoute: typeof AuthPurchaseOrdersIdImport
      parentRoute: typeof AuthPurchaseOrdersImport
    }
    '/_auth/purchase-orders/create': {
      id: '/_auth/purchase-orders/create'
      path: '/create'
      fullPath: '/purchase-orders/create'
      preLoaderRoute: typeof AuthPurchaseOrdersCreateImport
      parentRoute: typeof AuthPurchaseOrdersImport
    }
    '/_auth/store/$id': {
      id: '/_auth/store/$id'
      path: '/$id'
      fullPath: '/store/$id'
      preLoaderRoute: typeof AuthStoreIdImport
      parentRoute: typeof AuthStoreImport
    }
    '/_auth/store/transfer-requests': {
      id: '/_auth/store/transfer-requests'
      path: '/transfer-requests'
      fullPath: '/store/transfer-requests'
      preLoaderRoute: typeof AuthStoreTransferRequestsImport
      parentRoute: typeof AuthStoreImport
    }
    '/_auth/users/create': {
      id: '/_auth/users/create'
      path: '/create'
      fullPath: '/users/create'
      preLoaderRoute: typeof AuthUsersCreateImport
      parentRoute: typeof AuthUsersImport
    }
    '/_auth/products/': {
      id: '/_auth/products/'
      path: '/'
      fullPath: '/products/'
      preLoaderRoute: typeof AuthProductsIndexImport
      parentRoute: typeof AuthProductsImport
    }
    '/_auth/purchase-orders/': {
      id: '/_auth/purchase-orders/'
      path: '/'
      fullPath: '/purchase-orders/'
      preLoaderRoute: typeof AuthPurchaseOrdersIndexImport
      parentRoute: typeof AuthPurchaseOrdersImport
    }
    '/_auth/store/': {
      id: '/_auth/store/'
      path: '/'
      fullPath: '/store/'
      preLoaderRoute: typeof AuthStoreIndexImport
      parentRoute: typeof AuthStoreImport
    }
    '/_auth/suppliers/': {
      id: '/_auth/suppliers/'
      path: '/'
      fullPath: '/suppliers/'
      preLoaderRoute: typeof AuthSuppliersIndexImport
      parentRoute: typeof AuthSuppliersImport
    }
    '/_auth/users/': {
      id: '/_auth/users/'
      path: '/'
      fullPath: '/users/'
      preLoaderRoute: typeof AuthUsersIndexImport
      parentRoute: typeof AuthUsersImport
    }
    '/_auth/purchase-orders/$id/grn': {
      id: '/_auth/purchase-orders/$id/grn'
      path: '/grn'
      fullPath: '/purchase-orders/$id/grn'
      preLoaderRoute: typeof AuthPurchaseOrdersIdGrnImport
      parentRoute: typeof AuthPurchaseOrdersIdImport
    }
    '/_auth/store/$id/$product': {
      id: '/_auth/store/$id/$product'
      path: '/$product'
      fullPath: '/store/$id/$product'
      preLoaderRoute: typeof AuthStoreIdProductImport
      parentRoute: typeof AuthStoreIdImport
    }
    '/_auth/store/$id/transfer-requests': {
      id: '/_auth/store/$id/transfer-requests'
      path: '/transfer-requests'
      fullPath: '/store/$id/transfer-requests'
      preLoaderRoute: typeof AuthStoreIdTransferRequestsImport
      parentRoute: typeof AuthStoreIdImport
    }
    '/_auth/store/$id/': {
      id: '/_auth/store/$id/'
      path: '/'
      fullPath: '/store/$id/'
      preLoaderRoute: typeof AuthStoreIdIndexImport
      parentRoute: typeof AuthStoreIdImport
    }
    '/_auth/store/$id/transfer-requests/$trid': {
      id: '/_auth/store/$id/transfer-requests/$trid'
      path: '/$trid'
      fullPath: '/store/$id/transfer-requests/$trid'
      preLoaderRoute: typeof AuthStoreIdTransferRequestsTridImport
      parentRoute: typeof AuthStoreIdTransferRequestsImport
    }
    '/_auth/store/$id/transfer-requests/create': {
      id: '/_auth/store/$id/transfer-requests/create'
      path: '/create'
      fullPath: '/store/$id/transfer-requests/create'
      preLoaderRoute: typeof AuthStoreIdTransferRequestsCreateImport
      parentRoute: typeof AuthStoreIdTransferRequestsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthRoute: AuthRoute.addChildren({
    AuthDashboardRoute,
    AuthProductsRoute: AuthProductsRoute.addChildren({
      AuthProductsIdRoute,
      AuthProductsBrandsRoute,
      AuthProductsCategoryRoute,
      AuthProductsCreateRoute,
      AuthProductsUnitRoute,
      AuthProductsIndexRoute,
    }),
    AuthPurchaseOrdersRoute: AuthPurchaseOrdersRoute.addChildren({
      AuthPurchaseOrdersIdRoute: AuthPurchaseOrdersIdRoute.addChildren({
        AuthPurchaseOrdersIdGrnRoute,
      }),
      AuthPurchaseOrdersCreateRoute,
      AuthPurchaseOrdersIndexRoute,
    }),
    AuthStoreRoute: AuthStoreRoute.addChildren({
      AuthStoreIdRoute: AuthStoreIdRoute.addChildren({
        AuthStoreIdProductRoute,
        AuthStoreIdTransferRequestsRoute:
          AuthStoreIdTransferRequestsRoute.addChildren({
            AuthStoreIdTransferRequestsTridRoute,
            AuthStoreIdTransferRequestsCreateRoute,
          }),
        AuthStoreIdIndexRoute,
      }),
      AuthStoreTransferRequestsRoute,
      AuthStoreIndexRoute,
    }),
    AuthSuppliersRoute: AuthSuppliersRoute.addChildren({
      AuthSuppliersIndexRoute,
    }),
    AuthTransferRequestsRoute,
    AuthUsersRoute: AuthUsersRoute.addChildren({
      AuthUsersCreateRoute,
      AuthUsersIndexRoute,
    }),
  }),
  LoginRoute,
})

/* prettier-ignore-end */
