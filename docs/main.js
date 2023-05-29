

var dataTree = [
    {
        "name": "Documents",
        "type": "directory",
        "children": [
            {
                "name": "Reports",
                "type": "directory",
                "children": [
                    {
                        "name": "Q1 Report.docx",
                        "type": "file"
                    },
                    {
                        "name": "Q2 Report.docx",
                        "type": "file"
                    }
                ]
            },
            {
                "name": "Invoices",
                "type": "directory",
                "children": [
                    {
                        "name": "Invoice 001.pdf",
                        "type": "file"
                    },
                    {
                        "name": "Invoice 002.pdf",
                        "type": "file"
                    },
                    {
                        "name": "Invoice 003.pdf",
                        "type": "file"
                    }
                ]
            },
            {
                "name": "Notes.txt",
                "type": "file"
            }
        ]
    },
    {
        "name": "Pictures",
        "type": "directory",
        "children": [
            {
                "name": "Vacation",
                "type": "directory",
                "children": [
                    {
                        "name": "Beach.jpg",
                        "type": "file"
                    },
                    {
                        "name": "Mountain.jpg",
                        "type": "file"
                    }
                ]
            },
            {
                "name": "Family",
                "type": "directory",
                "children": [
                    {
                        "name": "Siblings.jpg",
                        "type": "file"
                    },
                    {
                        "name": "Parents.jpg",
                        "type": "file"
                    }
                ]
            }
        ]
    }
];

var view = document.getElementById('treeView');
var filter = document.getElementById('filter');
print(dataTree);

if (filter) {
    filter.addEventListener('keyup', function (ev) {
        var filter = ev.currentTarget.value?.toLowerCase();
        var expression = (x => x.name.toLowerCase().includes(filter) || x.type.toLowerCase().includes(filter))
        var result = filterTreeList(dataTree, expression);
        print(result);
    });
}




/*-----------------------------------------------------------------------*/

function print(data) {
    if (view) {
        var src = JSON.stringify(data, undefined, 2);
        view.innerHTML = syntaxHighlight(src);
    }
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}