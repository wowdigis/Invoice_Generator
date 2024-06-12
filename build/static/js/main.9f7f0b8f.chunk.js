(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[0],{34:function(e,t,s){},47:function(e,t,s){},56:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),l=s(12),c=s.n(l),n=(s(47),s(24),s(34),s(39)),r=s(19),d=s(10),o=s(3),m=s(14),h=s(16);const j=Object(h.b)("invoices/addInvoice",(async e=>{let{data:t,navigate:s}=e;const a=await async function(e){let t=JSON.parse(localStorage.getItem("state"));return console.log("API call"),t?(t.push(e),localStorage.setItem("state",JSON.stringify(t)),t):(localStorage.setItem("state",JSON.stringify([e])),{message:"New object created"})}(t);return s("/"),a})),b=Object(h.b)("invoices/fetchInvoices",(async()=>await async function(){return JSON.parse(localStorage.getItem("state"))||[]}())),x=Object(h.b)("invoices/deleteInvoice",(async e=>await async function(e){const t=JSON.parse(localStorage.getItem("state")).filter((t=>t.info.id!==e));return localStorage.setItem("state",JSON.stringify(t)),t}(e))),p=Object(h.b)("invoices/copyInvoice",(async e=>{let{data:t,navigate:s}=e;const a=await async function(e){const t=JSON.parse(localStorage.getItem("state"))||[],s=JSON.parse(JSON.stringify(e));s.info.id=(+new Date+Math.floor(999999*Math.random())).toString(36),s.info.invoiceNumber=t.length+1;const{items:a}=s;return a.forEach((e=>{e.id=(+new Date+Math.floor(999999*Math.random())).toString(36)})),t.push(s),localStorage.setItem("state",JSON.stringify(t)),t}(t);return s("/"),a})),u=Object(h.b)("invoices/modifyInvoice",(async e=>{let{data:t,navigate:s}=e;console.log("object");const a=await async function(e){const t=JSON.parse(localStorage.getItem("state")).filter((t=>t.info.id!==e.info.id));return t.push(e),localStorage.setItem("state",JSON.stringify(t)),t}(t);return s("/"),a})),O=Object(h.c)({name:"invoices",initialState:{invoices:[],status:""},reducers:{},extraReducers:e=>{e.addCase(j.fulfilled,((e,t)=>{e.invoices=t.payload,e.status="New Invoice Added",console.log(e.status)})).addCase(b.fulfilled,((e,t)=>{e.invoices=t.payload})).addCase(u.fulfilled,((e,t)=>{e.status="Invoice Modified",e.invoices=t.payload,console.log(t.payload),console.log("object")})).addCase(x.fulfilled,((e,t)=>{e.status="Invoice Deleted",e.invoices=t.payload})).addCase(p.fulfilled,((e,t)=>{e.status="Invoice Copied",e.invoices=t.payload,console.log(e.status)})).addCase(b.rejected,(e=>{e.status="error"}))}}),N=e=>e.invoices.invoices,v=e=>e.invoices.status;var f=O.reducer,y=s(20),w=s(6),g=s(17),C=s(1);class I extends i.a.Component{render(){return Object(C.jsxs)(g.a,{className:"my-1 flex-nowrap",children:[null!=this.props.cellData.leading&&Object(C.jsx)(g.a.Text,{className:"bg-light fw-bold border-0 text-secondary px-2",children:Object(C.jsx)("span",{className:"border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small",style:{width:"20px",height:"20px"},children:this.props.cellData.leading})}),Object(C.jsx)(w.a.Control,{className:this.props.cellData.textAlign,type:this.props.cellData.type,placeholder:this.props.cellData.placeholder,min:this.props.cellData.min,name:this.props.cellData.name,id:this.props.cellData.id,value:this.props.cellData.value,step:this.props.cellData.step,presicion:this.props.cellData.presicion,"aria-label":this.props.cellData.name,onChange:this.props.onItemizedItemEdit,required:!0})]})}}var T=I;class A extends i.a.Component{render(){var e=this.props.onItemizedItemEdit,t=this.props.currency,s=this.props.onRowDel,a=this.props.items.map((function(a){return Object(C.jsx)(S,{onItemizedItemEdit:e,item:a,onDelEvent:s.bind(this),currency:t},a.id)}));return Object(C.jsxs)("div",{children:[Object(C.jsxs)(r.a,{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"ITEM"}),Object(C.jsx)("th",{children:"QTY"}),Object(C.jsx)("th",{children:"PRICE/RATE"}),Object(C.jsx)("th",{className:"text-center",children:"ACTION"})]})}),Object(C.jsx)("tbody",{children:a})]}),Object(C.jsx)(d.a,{className:"fw-bold",onClick:this.props.onRowAdd,children:"Add Item"})]})}}class S extends i.a.Component{onDelEvent(){this.props.onDelEvent(this.props.item)}render(){return Object(C.jsxs)("tr",{children:[Object(C.jsxs)("td",{style:{width:"100%"},children:[Object(C.jsx)(T,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"name",placeholder:"Item name",value:this.props.item.name,id:this.props.item.id}}),Object(C.jsx)(T,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"text",name:"description",placeholder:"Item description",value:this.props.item.description,id:this.props.item.id}})]}),Object(C.jsx)("td",{style:{minWidth:"70px"},children:Object(C.jsx)(T,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{type:"number",name:"quantity",min:1,step:"1",value:this.props.item.quantity,id:this.props.item.id}})}),Object(C.jsx)("td",{style:{minWidth:"130px"},children:Object(C.jsx)(T,{onItemizedItemEdit:this.props.onItemizedItemEdit,cellData:{leading:this.props.currency,type:"number",name:"price",min:1,step:"0.01",presicion:2,textAlign:"text-end",value:this.props.item.price,id:this.props.item.id}})}),Object(C.jsx)("td",{className:"text-center",style:{minWidth:"50px"},children:Object(C.jsx)(y.c,{onClick:this.onDelEvent.bind(this),style:{height:"33px",width:"33px",padding:"7.5px"},className:"text-white mt-1 btn btn-danger"})})]})}}var D=A,E=s(23),F=s(13),R=s(40),M=s(30),q=s.n(M),k=s(38),B=s.p+"static/media/wowhead.2b334dcc.png",z=s.p+"static/media/wowbottom.a5a93363.png";const J=()=>{q()(document.querySelector("#invoiceCapture")).then((e=>{const t=e.toDataURL("image/png",1),s=new k.a({orientation:"portrait",unit:"pt",format:[612,792]});s.internal.scaleFactor=1;const a=s.getImageProperties(t),i=s.internal.pageSize.getWidth(),l=a.height*i/a.width;s.addImage(t,"PNG",0,0,i,l),s.save("invoice-001.pdf")}))};var L=e=>{let{type:t,showModal:s,closeModal:a,info:i,currency:l,total:c,items:n,subTotal:h,taxAmmount:b,discountAmmount:x}=e;const O=Object(o.m)(),N=Object(m.b)();return Object(C.jsxs)("div",{children:[Object(C.jsxs)(R.a,{show:s,onHide:a,size:"lg",centered:!0,children:[Object(C.jsxs)("div",{id:"invoiceCapture",children:[Object(C.jsx)("img",{src:B,alt:"headingImage",className:"w-100 h-auto"}),Object(C.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4",children:[Object(C.jsxs)("div",{className:"w-50 px-4",children:[Object(C.jsx)("h5",{className:"fw-bold text-primary",children:"Billed to:"}),Object(C.jsx)("div",{className:"fw-bold",children:i.billTo||""}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{className:"fw-bold",children:"Mobile No : "})," ",i.billToAddress||""]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{className:"fw-bold",children:"Address : "})," ",i.billToAddress||""]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{className:"fw-bold",children:"Email : "})," ",i.billToEmail||""]})]}),Object(C.jsxs)("div",{className:"text-end w-50 px-4",children:[Object(C.jsx)("h1",{className:"fw-bold mt-1 text-primary ",children:"Invoice"}),Object(C.jsxs)("h5",{className:"fw-bold",children:["Invoice #: ",i.invoiceNumber||""]}),Object(C.jsx)("div",{className:"fw-bold fs-5",children:i.dateOfIssue||""})]})]}),Object(C.jsxs)("div",{className:"pb-2",children:[Object(C.jsx)(r.a,{className:"mb-4 mt-4 text-center invoice-table px-4",children:Object(C.jsxs)("tbody",{children:[Object(C.jsxs)("tr",{className:"table-row w-100",children:[Object(C.jsx)("td",{className:"table-header",style:{width:"35%"},children:"ITEM"}),Object(C.jsx)("td",{className:"table-header",style:{width:"12%"},children:"T.QTY"}),Object(C.jsx)("td",{className:"table-header",style:{width:"18%"},children:"UNIT PRICE"}),Object(C.jsx)("td",{className:"table-header",style:{width:"18%"},children:"TOTAL"})]}),n.map(((e,t)=>Object(C.jsxs)("tr",{className:"table-row",children:[Object(C.jsxs)("td",{className:"table-cell",children:[e.name," - ",e.description]}),Object(C.jsx)("td",{className:"table-cell",children:e.quantity}),Object(C.jsxs)("td",{className:"table-cell",children:[l," ",e.price]}),Object(C.jsxs)("td",{className:"table-cell",children:[l," ",e.price*e.quantity]})]},t)))]})}),Object(C.jsx)(r.a,{className:"mb-4 mt-4 text-center invoice-table px-4",children:Object(C.jsxs)("tbody",{children:[Object(C.jsxs)("tr",{className:"table-row w-100",children:[Object(C.jsx)("td",{className:"table-cell",style:{width:"35%"},children:"\xa0"}),Object(C.jsx)("td",{className:"table-cell",style:{width:"12%"},children:"\xa0"}),Object(C.jsx)("td",{className:"table-cell",style:{width:"18%"},children:"SUBTOTAL"}),Object(C.jsxs)("td",{className:"table-cell",style:{width:"18%"},children:[l," ",h]})]}),0!==b&&Object(C.jsxs)("tr",{className:"table-row w-100",children:[Object(C.jsx)("td",{className:"table-cell",style:{width:"35%"},children:"\xa0"}),Object(C.jsx)("td",{className:"table-cell",style:{width:"12%"},children:"\xa0"}),Object(C.jsx)("td",{className:"table-cell",style:{width:"18%"},children:"TAX"}),Object(C.jsxs)("td",{className:"table-cell",style:{width:"18%"},children:[l," ",b]})]}),0!==x&&Object(C.jsxs)("tr",{className:"table-row w-100",children:[Object(C.jsx)("td",{className:"table-cell",style:{width:"35%"},children:"\xa0"}),Object(C.jsx)("td",{className:"table-cell",style:{width:"12%"},children:"\xa0"}),Object(C.jsx)("td",{className:"table-cell",style:{width:"18%"},children:"DISCOUNT"}),Object(C.jsxs)("td",{className:"table-cell",style:{width:"18%"},children:[l," ",x]})]}),Object(C.jsxs)("tr",{className:"table-row w-100",children:[Object(C.jsx)("td",{className:"table-cell",style:{width:"35%"},children:"\xa0"}),Object(C.jsx)("td",{className:"table-cell",style:{width:"12%"},children:"\xa0"}),Object(C.jsx)("td",{className:"table-cell",style:{width:"18%"},children:"TOTAL"}),Object(C.jsxs)("td",{className:"table-cell",style:{width:"18%"},children:[l," ",c]})]})]})}),Object(C.jsxs)("div",{className:"d-flex flex-column justify-content-between align-items-start bg-light w-100 pb-0 px-4",children:[Object(C.jsxs)("div",{className:"w-100 px-4",children:[Object(C.jsx)("h5",{className:"fw-bold text-primary",children:"BANK TRANSFER DETAILS:"}),Object(C.jsx)("div",{className:"fw-bold",children:i.billTo||""}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{className:"fw-bold",children:"BANK NAME: "})," ",i.billFrom||""]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{className:"fw-bold",children:"A/C- "})," ",i.billToEmail||""]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{className:"fw-bold",children:"IFSC CODE -  "})," ",i.billToAddress||""]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{className:"fw-bold",children:"BRANCH NAME -  "})," ",i.billFromBranch||""]})]}),Object(C.jsx)("div",{className:"w-100 text-end pb-4 px-4",children:Object(C.jsx)("h6",{children:"For : WOWSTAR SERVICES INDIA PVT LTD"})}),Object(C.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4 pt-4 px-4",children:[Object(C.jsx)("div",{className:"w-50 pt-4 ",children:Object(C.jsx)("h3",{className:"fw-bold text-primary",children:"Thank You!"})}),Object(C.jsx)("div",{className:"w-50 text-end pt-4",children:Object(C.jsx)("h5",{className:"fw-bold",children:"Authorized Signatory"})})]}),Object(C.jsx)("img",{src:z,alt:"bottomImage",className:"w-100 h-auto"})]})]})]}),Object(C.jsx)("div",{className:"pb-4 px-4 pt-4",children:Object(C.jsxs)(E.a,{children:[Object(C.jsx)(F.a,{md:6,children:3===t?Object(C.jsxs)(d.a,{variant:"primary",className:"d-block w-100",onClick:()=>{N(p({data:{info:i,currency:l,total:c,items:n,subTotal:h,taxAmmount:b,discountAmmount:x},navigate:O}))},children:[Object(C.jsx)(y.b,{style:{width:"15px",height:"15px",marginTop:"-3px"},className:"me-2"}),"Copy Invoice"]}):1===t?Object(C.jsxs)(d.a,{variant:"primary",className:"d-block w-100",onClick:()=>{return e={info:i,currency:l,total:c,items:n,subTotal:h,taxAmmount:b,discountAmmount:x},console.log("object"),void N(u({data:e,navigate:O}));var e},children:[Object(C.jsx)(y.b,{style:{width:"15px",height:"15px",marginTop:"-3px"},className:"me-2"}),"Modify Invoice"]}):Object(C.jsxs)(d.a,{variant:"primary",className:"d-block w-100",onClick:()=>{N(j({data:{info:i,currency:l,total:c,items:n,subTotal:h,taxAmmount:b,discountAmmount:x},navigate:O}))},children:[Object(C.jsx)(y.b,{style:{width:"15px",height:"15px",marginTop:"-3px"},className:"me-2"}),"Add Invoice"]})}),Object(C.jsx)(F.a,{md:6,children:Object(C.jsxs)(d.a,{variant:"outline-primary",className:"d-block w-100 mt-3 mt-md-0",onClick:J,children:[Object(C.jsx)(y.a,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Download Copy"]})})]})})]}),Object(C.jsx)("hr",{className:"mt-4 mb-3"})]})};var P=e=>{let{id:t,isOpen:s,closeView:i}=e;const l=Object(m.c)(N);console.log(t);const c=l.find((e=>e.info.id===t)),[n,r]=Object(a.useState)(s);if(Object(a.useEffect)((()=>{r(s)}),[s]),!t)return null;return Object(C.jsx)(L,{type:3,showModal:n,closeModal:()=>{r(!1),i()},info:c.info,items:c.items,currency:c.currency,subTotal:c.subTotal,taxAmmount:c.taxAmmount,discountAmmount:c.discountAmmount,total:c.total,isOpen:n})};var W=()=>{const e=Object(m.b)(),[t,s]=Object(a.useState)(!1),[i,l]=Object(a.useState)(),c=Object(o.m)(),n=(t,a)=>{switch(a){case"Edit":c("/edit-invoice/".concat(t));break;case"Delete":e(x(t));break;case"View":l(t),s(!0)}},h=Object(m.c)(N),j=Object(m.c)(v);return Object(a.useEffect)((()=>{e(b())}),[]),Object(C.jsxs)("div",{className:"m-5",children:[Object(C.jsx)(d.a,{variant:"primary",onClick:()=>{c("/create-invoice")},children:"Create Invoice"}),"idle"!==j&&Object(C.jsxs)("div",{className:"mt-3 p-2 rounded-md bg-yellow-200",children:["Status: ",j]}),Object(C.jsxs)(r.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:"Invoice Id"}),Object(C.jsx)("th",{children:"Bill To (Name)"}),Object(C.jsx)("th",{children:"Bill From (Name)"}),Object(C.jsx)("th",{children:"Date of Issue"})]})}),Object(C.jsx)("tbody",{children:h&&h.map(((e,t)=>Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:t+1}),Object(C.jsx)("td",{children:e.info.id}),Object(C.jsx)("td",{children:e.info.billTo}),Object(C.jsx)("td",{children:e.info.billFrom}),Object(C.jsx)("td",{children:e.info.dateOfIssue}),Object(C.jsxs)("td",{children:[Object(C.jsx)(d.a,{variant:"outline-success",className:"m-1",onClick:()=>n(e.info.id,"View"),children:"View"}),Object(C.jsx)(d.a,{variant:"outline-info",className:"m-1",onClick:()=>n(e.info.id,"Edit"),children:"Edit"})," ",Object(C.jsx)(d.a,{variant:"outline-danger",className:"m-1",onClick:()=>n(e.info.id,"Delete"),children:"Delete"})]})]},t)))})]}),Object(C.jsx)(P,{id:i,isOpen:t,closeView:()=>s(!1)})]})},U=s(41);class V extends i.a.Component{constructor(e){super(e),this.editField=e=>{this.setState((()=>({[e.target.name]:e.target.value}))),this.handleCalculateTotal()},this.onCurrencyChange=e=>{this.setState(e)},this.openModal=e=>{e.preventDefault(),this.handleCalculateTotal(),this.setState({isOpen:!0})},this.closeModal=e=>this.setState({isOpen:!1});const{invoiceData:t}=this.props;if(t){const{info:e,items:s,total:a,subTotal:i,currency:l}=t;return this.state={id:e.id,currency:l,currentDate:e.currentDate,invoiceNumber:e.invoiceNumber,dateOfIssue:e.dateOfIssue,billTo:e.billTo,billToEmail:e.billToEmail,billToAddress:e.billToAddress,billFrom:e.billFrom,billFromEmail:e.billFromEmail,billFromAddress:e.billFromAddress,billFromBranch:e.billFromBranch,notes:e.notes,total:a,subTotal:i,taxRate:e.taxRate,taxAmmount:e.taxAmmount,discountRate:e.discountRate,discountAmmount:e.discountAmmount,items:s},this.editField=this.editField.bind(this),void(this.handleAddEvent=this.handleAddEvent.bind(this))}this.state={id:(+new Date+Math.floor(999999*Math.random())).toString(36),isOpen:!1,currency:"\u20b9",currentDate:"",invoiceNumber:"",dateOfIssue:"",billTo:"",billToEmail:"",billToAddress:"",billFrom:"",billFromEmail:"",billFromAddress:"",billFromBranch:"",notes:"",total:0,subTotal:0,taxRate:0,taxAmmount:0,discountRate:0,discountAmmount:0,items:[{id:(+new Date+Math.floor(999999*Math.random())).toString(36),name:"",description:"",price:0,quantity:0}]},this.editField=this.editField.bind(this),this.handleAddEvent=this.handleAddEvent.bind(this)}componentDidMount(e){this.handleCalculateTotal()}handleAddEvent(e){var t={id:(+new Date+Math.floor(999999*Math.random())).toString(36),name:"",price:1,description:"",quantity:1};this.state.items.push(t),this.setState(this.state.items,(()=>{this.handleCalculateTotal()}))}handleRowDel(e){const t=this.state.items.filter((t=>t!==e));this.setState({items:t},(()=>{this.handleCalculateTotal()}))}handleCalculateTotal(){var e=this.state.items.reduce(((e,t)=>e+parseFloat(t.price)*parseInt(t.quantity)),0).toFixed(2);this.setState({subTotal:parseFloat(e).toFixed(2)},(()=>{this.setState({taxAmmount:parseFloat(parseFloat(e)*(this.state.taxRate/100)).toFixed(2)},(()=>{this.setState({discountAmmount:parseFloat(parseFloat(e)*(this.state.discountRate/100)).toFixed(2)},(()=>{this.setState({total:e-this.state.discountAmmount+parseFloat(this.state.taxAmmount)})}))}))}))}onItemizedItemEdit(e){var t={id:e.target.id,name:e.target.name,value:e.target.value},s=this.state.items.slice().map((function(e){for(var s in e)s===t.name&&e.id===t.id&&(e[s]=t.value);return e}));this.setState({items:s}),this.handleCalculateTotal()}render(){return Object(C.jsx)(w.a,{onSubmit:this.openModal,className:"justify-content-center",children:Object(C.jsxs)(E.a,{children:[Object(C.jsx)(F.a,{md:8,lg:9,children:Object(C.jsxs)(U.a,{className:"p-4 p-xl-5 my-3 my-xl-4",children:[Object(C.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mb-3",children:[Object(C.jsxs)("div",{className:"d-flex flex-column",children:[Object(C.jsx)("div",{className:"d-flex flex-column",children:Object(C.jsxs)("div",{className:"mb-2",children:[Object(C.jsx)("span",{className:"fw-bold",children:"Current\xa0Date:\xa0"}),Object(C.jsx)("span",{className:"current-date",children:(new Date).toLocaleDateString()})]})}),Object(C.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(C.jsx)("span",{className:"fw-bold d-block me-2",children:"Due\xa0Date:"}),Object(C.jsx)(w.a.Control,{type:"date",value:this.state.dateOfIssue,name:"dateOfIssue",onChange:e=>this.editField(e),style:{maxWidth:"150px"},required:"required"})]})]}),Object(C.jsxs)("div",{className:"d-flex flex-row align-items-center",children:[Object(C.jsx)("span",{className:"fw-bold me-2",children:"Invoice\xa0Number:\xa0"}),Object(C.jsx)(w.a.Control,{type:"number",value:this.state.invoiceNumber,name:"invoiceNumber",onChange:e=>this.editField(e),min:"1",style:{maxWidth:"70px"},required:"required"})]})]}),Object(C.jsx)("hr",{className:"my-4"}),Object(C.jsxs)(E.a,{className:"mb-5",children:[Object(C.jsxs)(F.a,{children:[Object(C.jsx)(w.a.Label,{className:"fw-bold",children:"Bill to:"}),Object(C.jsx)(w.a.Control,{placeholder:"Who is this invoice to?",rows:3,value:this.state.billTo,type:"text",name:"billTo",className:"my-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),Object(C.jsx)(w.a.Control,{placeholder:"Email address",value:this.state.billToEmail,type:"email",name:"billToEmail",className:"my-2",onChange:e=>this.editField(e),autoComplete:"email",required:"required"}),Object(C.jsx)(w.a.Control,{placeholder:"Billing address",value:this.state.billToAddress,type:"text",name:"billToAddress",className:"my-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"})]}),Object(C.jsxs)(F.a,{children:[Object(C.jsx)(w.a.Label,{className:"fw-bold",children:"Bill from:"}),Object(C.jsx)(w.a.Control,{placeholder:"Enter Bank Name",rows:3,value:this.state.billFrom,type:"text",name:"billFrom",className:"my-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),Object(C.jsx)(w.a.Control,{placeholder:"Enter Account Number",value:this.state.billFromEmail,type:"number",name:"billFromEmail",className:"my-2",onChange:e=>this.editField(e),autoComplete:"email",required:"required"}),Object(C.jsx)(w.a.Control,{placeholder:"Enter IFSC Code",value:this.state.billFromAddress,type:"text",name:"billFromAddress",className:"my-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),Object(C.jsx)(w.a.Control,{placeholder:"Enter Branch Name",value:this.state.billFromBranch,type:"text",name:"billFromBranch",className:"my-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"})]})]}),Object(C.jsx)(D,{onItemizedItemEdit:this.onItemizedItemEdit.bind(this),onRowAdd:this.handleAddEvent.bind(this),onRowDel:this.handleRowDel.bind(this),currency:this.state.currency,items:this.state.items}),Object(C.jsx)(E.a,{className:"mt-4 justify-content-end",children:Object(C.jsxs)(F.a,{lg:6,children:[Object(C.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",children:[Object(C.jsx)("span",{className:"fw-bold",children:"Subtotal:"}),Object(C.jsxs)("span",{children:[this.state.currency,this.state.subTotal]})]}),Object(C.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(C.jsx)("span",{className:"fw-bold",children:"Discount:"}),Object(C.jsxs)("span",{children:[Object(C.jsxs)("span",{className:"small ",children:["(",this.state.discountRate||0,"%)"]}),this.state.currency,this.state.discountAmmount||0]})]}),Object(C.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between mt-2",children:[Object(C.jsx)("span",{className:"fw-bold",children:"Tax:"}),Object(C.jsxs)("span",{children:[Object(C.jsxs)("span",{className:"small ",children:["(",this.state.taxRate||0,"%)"]}),this.state.currency,this.state.taxAmmount||0]})]}),Object(C.jsx)("hr",{}),Object(C.jsxs)("div",{className:"d-flex flex-row align-items-start justify-content-between",style:{fontSize:"1.125rem"},children:[Object(C.jsx)("span",{className:"fw-bold",children:"Total:"}),Object(C.jsxs)("span",{className:"fw-bold",children:[this.state.currency,this.state.total.toFixed(2)||0]})]})]})}),Object(C.jsx)("hr",{className:"my-4"}),Object(C.jsx)(w.a.Label,{className:"fw-bold",children:"Notes:"}),Object(C.jsx)(w.a.Control,{placeholder:"Thanks for your business!",name:"notes",value:this.state.notes,onChange:e=>this.editField(e),as:"textarea",className:"my-2",rows:1})]})}),Object(C.jsx)(F.a,{md:4,lg:3,children:Object(C.jsxs)("div",{className:"sticky-top pt-md-3 pt-xl-4",children:[Object(C.jsx)(d.a,{variant:"primary",type:"submit",className:"d-block w-100",children:"Review Invoice"}),Object(C.jsx)(L,{type:this.props.invoiceData?1:2,showModal:this.state.isOpen,closeModal:this.closeModal,info:this.state,items:this.state.items,currency:this.state.currency,subTotal:this.state.subTotal,taxAmmount:this.state.taxAmmount,discountAmmount:this.state.discountAmmount,total:this.state.total}),Object(C.jsxs)(w.a.Group,{className:"mb-3",children:[Object(C.jsx)(w.a.Label,{className:"fw-bold",children:"Currency:"}),Object(C.jsxs)(w.a.Select,{onChange:e=>this.onCurrencyChange({currency:e.target.value}),className:"btn btn-light my-1","aria-label":"Change Currency",children:[Object(C.jsx)("option",{value:"\u20b9",children:"IND (Indian Rupee)"}),Object(C.jsx)("option",{value:"$",children:"USD (United States Dollar)"}),Object(C.jsx)("option",{value:"\xa3",children:"GBP (British Pound Sterling)"}),Object(C.jsx)("option",{value:"\xa5",children:"JPY (Japanese Yen)"}),Object(C.jsx)("option",{value:"$",children:"CAD (Canadian Dollar)"}),Object(C.jsx)("option",{value:"$",children:"AUD (Australian Dollar)"}),Object(C.jsx)("option",{value:"$",children:"SGD (Signapore Dollar)"}),Object(C.jsx)("option",{value:"\xa5",children:"CNY (Chinese Renminbi)"}),Object(C.jsx)("option",{value:"\u20bf",children:"BTC (Bitcoin)"})]})]}),Object(C.jsxs)(w.a.Group,{className:"my-3",children:[Object(C.jsx)(w.a.Label,{className:"fw-bold",children:"Tax rate:"}),Object(C.jsxs)(g.a,{className:"my-1 flex-nowrap",children:[Object(C.jsx)(w.a.Control,{name:"taxRate",type:"number",value:this.state.taxRate,onChange:e=>this.editField(e),className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(C.jsx)(g.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]}),Object(C.jsxs)(w.a.Group,{className:"my-3",children:[Object(C.jsx)(w.a.Label,{className:"fw-bold",children:"Discount rate:"}),Object(C.jsxs)(g.a,{className:"my-1 flex-nowrap",children:[Object(C.jsx)(w.a.Control,{name:"discountRate",type:"number",value:this.state.discountRate,onChange:e=>this.editField(e),className:"bg-white border",placeholder:"0.0",min:"0.00",step:"0.01",max:"100.00"}),Object(C.jsx)(g.a.Text,{className:"bg-light fw-bold text-secondary small",children:"%"})]})]})]})})]})})}}var G=V;var Y=()=>{const{id:e}=Object(o.o)(),t=JSON.parse(localStorage.getItem("state")).find((t=>t.info.id===e));return Object(C.jsx)(G,{invoiceData:t})};function $(){const e=Object(o.q)();return console.error(e),Object(C.jsx)("div",{className:"hero bg-base-200",children:Object(C.jsxs)("div",{className:"hero-content p-10 w-9/12 justify-center flex flex-col text-center",children:[Object(C.jsx)("h1",{className:"text-5xl font-extrabold mb-5",children:"Oops!"}),Object(C.jsx)("p",{className:"text-md font-bold ",children:"Sorry, an unexpected error has occurred."}),Object(C.jsx)("p",{children:Object(C.jsx)("i",{children:e.statusText||e.message})})]})})}var H=s(18);const K=Object(H.b)([{path:"/",element:Object(C.jsx)(W,{}),errorElement:Object(C.jsx)($,{})},{path:"/create-invoice",element:Object(C.jsx)(G,{}),errorElement:Object(C.jsx)($,{})},{path:"/edit-invoice/:id",element:Object(C.jsx)(Y,{}),errorElement:Object(C.jsx)($,{})}]);var Q=()=>Object(C.jsx)("div",{className:"App d-flex flex-column align-items-center w-100",children:Object(C.jsx)(n.a,{children:Object(C.jsx)(H.a,{router:K})})});var X=e=>{e&&e instanceof Function&&s.e(5).then(s.bind(null,448)).then((t=>{let{getCLS:s,getFID:a,getFCP:i,getLCP:l,getTTFB:c}=t;s(e),a(e),i(e),l(e),c(e)}))};const Z=Object(h.a)({reducer:{invoices:f}});c.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(m.a,{store:Z,children:Object(C.jsx)(Q,{})})}),document.getElementById("root")),X()}},[[56,1,3]]]);
//# sourceMappingURL=main.9f7f0b8f.chunk.js.map