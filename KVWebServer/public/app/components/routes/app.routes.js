"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('../login/login.component');
var createAccount_component_1 = require('../createAccount/createAccount.component');
var managePassword_component_1 = require('../managePassword/managePassword.component');
var order_component_1 = require('../order/order.component');
var app_service_1 = require('../../services/app.service');
var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.Login
    },
    {
        path: 'order',
        component: order_component_1.Order,
        canActivate: [app_service_1.LoginGuard]
    },
    {
        path: 'forgot/password',
        component: managePassword_component_1.ForgotPassword
    },
    {
        path: 'send/password',
        component: managePassword_component_1.SendPassword
    },
    {
        path: 'change/password',
        component: managePassword_component_1.ChangePassword,
        canActivate: [app_service_1.LoginGuard]
    },
    {
        path: 'create/account',
        component: createAccount_component_1.CreateAccount
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
exports.Routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map