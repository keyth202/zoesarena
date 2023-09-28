import duotone from "icons/duotone";
export const navigations = [{
  type: "label",
  label: "Dashboard"
}, {
  path: "/",
  name: "CRM",
  icon: duotone.CommentsQuestionCheck,
  badge: {
    value: "30"
  }
}, {
  name: "LMS",
  path: "/dashboards/learning-management",
  icon: duotone.PersonChalkboard
}, {
  name: "Sales 1",
  path: "/dashboards/sales",
  icon: duotone.BadgeDollar
}, {
  name: "Sales 2",
  path: "/dashboards/sales-v2",
  icon: duotone.MessagesDollar
}, {
  name: "Hiring",
  path: "/dashboards/job-management",
  icon: duotone.PersonCircleCheck
}, {
  name: "Project 1",
  path: "/dashboards/project-management",
  icon: duotone.RectangleCirclePlus
}, {
  name: "Project 2",
  path: "/dashboards/project-management-v2",
  icon: duotone.DiagramProject
}, {
  name: "SaaS",
  path: "/dashboards/saas",
  icon: duotone.LayerGroup
}, {
  type: "label",
  label: "Management"
}, {
  name: "Profiles",
  icon: duotone.UserProfile,
  children: [{
    name: "Profile 1",
    path: "/profiles/profile"
  }, {
    name: "Profile 2",
    path: "/profiles/profile-v2"
  }]
}, {
  name: "Accounts",
  icon: duotone.Accounts,
  children: [{
    name: "Account 1",
    path: "/accounts/account"
  }, {
    name: "Account 2",
    path: "/accounts/account-v2"
  }]
}, {
  name: "User & Contact",
  icon: duotone.UserList,
  children: [{
    name: "Add User",
    path: "/user-list/add-new-user"
  }, {
    name: "User List 1",
    path: "/user-list/user-list-view"
  }, {
    name: "User List 2",
    path: "/user-list/user-list-view-v2"
  }, {
    name: "User Grid 1",
    path: "/user-list/user-grid-view"
  }, {
    name: "User Grid 2",
    path: "/user-list/user-grid-view-v2"
  }, {
    name: "Contact List",
    path: "/contact-list/contact-list-view"
  }, {
    name: "Contact Grid",
    path: "/contact-list/contact-grid-view"
  }]
}, {
  name: "Invoice",
  icon: duotone.Invoice,
  children: [{
    name: "Invoice List 1",
    path: "/invoice/invoice-list"
  }, {
    name: "Invoice List 2",
    path: "/invoice/invoice-list-v2"
  }, {
    name: "Invoice Details 1",
    path: "/invoice/invoice-details"
  }, {
    name: "Invoice Details 2",
    path: "/invoice/invoice-details-v2"
  }, {
    name: "Create Invoice 1",
    path: "/invoice/create-invoice"
  }, {
    name: "Create Invoice 2",
    path: "/invoice/create-invoice-v2"
  }]
}, {
  name: "Ecommerce",
  icon: duotone.Ecommerce,
  children: [{
    name: "Cart",
    path: "/ecommerce/cart"
  }, {
    name: "Payment",
    path: "/ecommerce/payment"
  }, {
    name: "Billing Address",
    path: "/ecommerce/billing-address"
  }, {
    name: "Product Details",
    path: "/ecommerce/product-details"
  }, {
    name: "Shop 1",
    path: "/ecommerce/shop"
  }, {
    name: "Shop 2",
    path: "/ecommerce/shop-v2"
  }, {
    name: "Checkout 1",
    path: "/ecommerce/checkout"
  }, {
    name: "Checkout 2",
    path: "/ecommerce/checkout-v2"
  }, {
    name: "Payment Complete 1",
    path: "/ecommerce/payment-complete"
  }, {
    name: "Payment Complete 2",
    path: "/ecommerce/payment-complete-v2"
  }]
}, {
  name: "Admin Ecommerce",
  icon: duotone.AdminEcommerce,
  children: [{
    name: "Product List",
    path: "/admin-ecommerce/product-list"
  }, {
    name: "Product Grid",
    path: "/admin-ecommerce/product-grid"
  }, {
    name: "Create Product",
    path: "/admin-ecommerce/create-product"
  }, {
    name: "Order Management",
    path: "/admin-ecommerce/order-management"
  }, {
    name: "Product Management",
    path: "/admin-ecommerce/product-management"
  }, {
    name: "Customer Management",
    path: "/admin-ecommerce/customer-management"
  }]
}, {
  name: "Projects",
  icon: duotone.ProjectChart,
  children: [{
    name: "Project List 1",
    path: "/projects/project-v1"
  }, {
    name: "Project List 2",
    path: "/projects/project-v2"
  }, {
    name: "Project List 3",
    path: "/projects/project-v3"
  }, {
    name: "Team Member",
    path: "/projects/team-member"
  }, {
    name: "Project Details",
    path: "/projects/project-details"
  }]
}, {
  name: "Data Table",
  icon: duotone.DataTable,
  path: "/data-table/data-table-v2" // children: [{ name: 'Data Table', path: '/dashboard/data-table-v2' }],

}, {
  type: "label",
  label: "Apps"
}, {
  name: "Todo List",
  icon: duotone.TodoList,
  path: "/todo-list"
}, {
  name: "Calendar",
  icon: duotone.Calender,
  path: "/calendar"
}, {
  name: "Chats",
  icon: duotone.Chat,
  children: [{
    name: "Chat 1",
    path: "/chats/chat-v1"
  }, {
    name: "Chat 2",
    path: "/chats/chat-v2"
  }]
}, {
  name: "Sessions",
  icon: duotone.Session,
  children: [{
    iconText: "RT",
    name: "Sign In",
    children: [{
      name: "Sign In 1",
      path: "/authentication/login"
    }, {
      name: "Sign In 2",
      path: "/authentication/login-v2"
    }]
  }, {
    iconText: "RT",
    name: "Register",
    children: [{
      name: "Register 1",
      path: "/authentication/register"
    }, {
      name: "Register 2",
      path: "/authentication/register-v2"
    }]
  }, {
    iconText: "RT",
    name: "Forget Password",
    children: [{
      name: "Forget Password 1",
      path: "/authentication/forget-password"
    }, {
      name: "Forget Password 2",
      path: "/authentication/forget-password-v2"
    }]
  }, {
    name: "Two Step Verification",
    path: "/authentication/two-step-verification"
  }, {
    name: "Reset Password",
    path: "/authentication/new-password"
  }]
}, {
  name: "Pages",
  icon: duotone.Pages,
  children: [{
    name: "Pricing",
    path: "/pricing"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Contact",
    path: "/contact"
  }, {
    name: "Privacy",
    path: "/privacy"
  }]
}, {
  name: "Documentation",
  icon: duotone.FileCircleQuestion,
  type: "extLink",
  path: "https://uko-react-doc.vercel.app/"
}];