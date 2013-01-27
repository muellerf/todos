// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: todos
// View: TodosPage
// ==========================================================================

todos.TodosPage = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: todos.MyController,
            action: 'init'
        }
    },
    
    cssClass: 'TodosPage',

    childViews: 'header content footer',

    header: M.ToolbarView.design({
        anchorLocation: M.TOP,
        childViews: 'centerLabel toggleView',

        toggleView:M.ToggleView.design({
            childViews: 'button1 button2',

            anchorLocation: M.RIGHT,

            toggleOnClick: YES,

            button1:M.ButtonView.design({
                value: 'Edit',
                icon: 'gear',
                events: {
                    tap: {
                        target: todos.TodoController,
                        action: 'edit'
                    }
                }

            }),

            button2:M.ButtonView.design({
                value: 'Save',
                icon: 'check',
                events: {
                    tap: {
                        target: todos.TodoController,
                        action: 'edit'
                    }
                }
            })
        }),

        centerLabel:M.LabelView.design({
            value: 'Todos',
            anchorLocation:M.CENTER
        })
    }),



    content: M.ScrollView.design({
        childViews: 'counter text inputField todoList',

        counter:M.LabelView.design({
            value: 0,
            contentBinding: {
                target: todos.TodoController,
                property: 'counter'
            },
            isInline: YES
        }),

        text:M.LabelView.design({
            value: 'item(s) left.',
            isInline: YES
        }),

        inputField:M.TextFieldView.design({
            initialText: 'Enter ToDo Item...',

            events: {
                enter: {
                    target: todos.TodoController,
                    action: 'addTodo'
                }
            }
        }),

        todoList: M.ListView.design({
            listItemTemplateView: todos.TodoItemView,
            contentBinding: {
                target: todos.TodoController,
                property: 'todos'
            }
        })
    }),



    footer: M.ToolbarView.design({
        value: 'FOOTER',
        anchorLocation: M.BOTTOM
    })

});

