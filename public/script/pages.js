var getPages = function() {
    return pages;
};
var pages = [
    {
        num: 1,
        title: 'CSS Grid',
        subtitle: 'Grid',
        instructions: {
            part1: "<p>Establish a grid.</p>",
            part2: "<p>This fill the open space.</p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '\tdisplay: grid;',
            solution: '',
        },
        gridContainer: {
            guide: '<div></div>',
            guidelines: '',
            grid: '<div class="target">1</div>'
        },
        style: [
            '.guide {\n\tgrid-template-rows: 40%;\n}',
            '.grid {\n\tgrid-template-rows: 40%;\n}'
        ]
    },
    {
        num: 2,
        title: 'CSS Grid',
        subtitle: 'Grid with two elements',
        instructions: {
            part1: "<p>Establish the grid once again.</p>",
            part2: " <p>This uses the child elements to fill the space with <em>equal height rows</em>.</p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '\tdisplay: grid;',
            solution: '',
        },
        gridContainer: {
            guide: '<div></div><div></div>',
            guidelines: '<div></div><div></div>',
            grid: '<div class="target">1</div>\n<div class="target">2</div>'
        },
        style: [
            '.guide, guidelines {\n\tgrid-template-rows: 1fr 1fr;\n}'
        ]
    },
    {
        num: 3,
        title: 'CSS Grid',
        subtitle: 'Grid with margin',
        instructions: {
            part1: "<p>Child elements with margin.</p>",
            part2: "<p>Margin is taken into account when filling the space with <em>equal height rows</em>.</p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '\tdisplay: grid;',
            solution: '',
        },
        gridContainer: {
            guide: '',
            guidelines: '',
            grid: '<p class="target">&lt;p&gt;</p>\n<p class="target">&lt;p&gt;</p>'
        },
        style: []
    },
    {
        num: 4,
        title: 'CSS Grid',
        subtitle: 'Grid template rows',
        instructions: {
            part1: "<p>Using <code>grid-template-rows</code>.</p>",
            part2: "<p>This lets you configure the size of every row in the Grid.</p>\n<p>It even lets you add new rows when you need.</p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '\tdisplay: grid;\n\tgrid-template-rows: 100px 200px;',
            solution: '',
        },
        gridContainer: {
            guide: '<div class="dunes"></div>\n<div class="rocky"></div>',
            guidelines: '<div></div>\n<div></div>',
            grid: '<div class="target dunes"></div>\n<div class="target rocky"></div>'
        },
        style: [
            '.guide {\n\tgrid-template-rows: 100px 200px;\n}',
            '.guidelines {\n\tgrid-template-rows: 100px 200px;\n}'
        ]
    },
    {
        num: 5,
        title: 'CSS Grid',
        subtitle: 'Grid template columns',
        instructions: {
            part1: "<p>Use <code>grid-template-columns</code>.</p>",
            part2: " <p>This lets you configure the size of every column in the Grid.</p>\n<p>Each column definition is separated by a space.</p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '\tdisplay: grid;\n\tgrid-template-columns: 100px 200px 100px;',
            solution: '',
        },
        gridContainer: {
            guide: '<div class="rocky"></div>\n<div class="dunes"></div>\n<div class="rocky"></div>',
            guidelines: '',
            grid: '<div class="target rocky"></div>\n<div class="target dunes"></div>\n<div class="target rocky"></div>'
        },
        style: ['.guide {\n\tgrid-template-columns: 100px 200px 100px;\n}']
    },
    {
        num: 6,
        title: 'CSS Grid',
        subtitle: 'Fills (fr unit)',
        instructions: {
            part1: "<p>Use <code>fr</code> in place of <code>px</code>.</p>",
            part2: "<p>Here we use a brand new unit <em>fr</em> for specifying <em>fractions</em>.</p>\n<p>The center column will take up twice the space as the outer columns.</p>\n<p>All three columns will fill the entire space.</p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '\tdisplay: grid;\n\tgrid-template-columns: 1fr 2fr 1fr;',
            solution: '',
        },
        gridContainer: {
            guide: '<div class="rocky"></div>\n<div class="dunes"></div>\n<div class="rocky"></div>',
            guidelines: '',
            grid: '<div class="target rocky"></div>\n<div class="target dunes"></div>\n<div class="target rocky"></div>'
        },
        style: ['.guide {\n\tgrid-template-columns: 1fr 2fr 1fr;\n}']
    },
    {
        num: 7,
        title: 'CSS Grid',
        subtitle: 'Mixing units',
        instructions: {
            part1: "<p>Use <code>px</code> and <code>fr</code> together.</p>",
            part2: "<p>Start by establishing the Grid.</p>\n<p>The Grid's default behavior is to <em>layout the rows equally</em>.</p>\n<p>Next define the two columns using <code>100px</code> and <code>1fr</code>.</p>\n<p>Lastly define the rows with <code>1fr</code> and <code>100px</code>.</p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '\tdisplay: grid;\n\tgrid-template-columns: 100px 1fr;\n\tgrid-template-rows: 1fr 100px;',
            solution: '',
        },
        gridContainer: {
            guide: '<div class="rocky"></div>\n<div class="cloudy"></div>\n<div class="dunes"></div>\n<div class="rocky"></div>',
            guidelines: '',
            grid: '<div class="target rocky"></div>\n<div class="target cloudy"></div>\n<div class="target dunes"></div>\n<div class="target rocky"></div>'
        },
        style: ['.guide {\n\tgrid-template-columns: 100px 1fr;\n\tgrid-template-rows: 1fr 100px;\n']
    },
    {
        num: 8,
        title: 'CSS Grid',
        subtitle: 'Repeat',
        instructions: {
            part1: "<p>Use the <code>repeat</code> function as a shorthand.</p>",
            part2: "<p>Use <code>repeat()</code> with the number of columns or rows followed by size.</p>\n<p>Normally this would be typed as<br>\n<code>grid-template-columns: 100px 100px 100px 100px;</code></p>\n<p>Instead this can be typed as<br>\n<code>grid-template-columns: repeat(4, 100px);</code>.</p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 100px);\n\tgrid-template-rows: repeat(4, 100px);',
            solution: '',
        },
        gridContainer: {
            guide: ' <div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>',
            guidelines: '<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>',
            grid: '<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>'
        },
        style: [
            '.guide {\n\tgrid-template-columns: repeat(4, 100px);\n\tgrid-template-rows: repeat(4, 100px);\n}',
            '.guidelines {\n\tgrid-template-columns: repeat(4, 100px) 1fr;\n\tgrid-template-rows: repeat(4, 100px) 1fr;\n}'
        ]
    },
    {
        num: 9,
        title: 'CSS Grid',
        subtitle: 'Repeating fractions',
        instructions: {
            part1: "<p>The <code>repeat</code> function can also be used with <code>fr</code>.</p>",
            part2: ""
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '\tdisplay: grid;\n\tgrid-template-columns: repeat(7, 1fr);',
            solution: '',
        },
        gridContainer: {
            guide: '<div class="rocky"></div>\n<div class="rocky"></div>\n<div class="rocky"></div>\n<div class="rocky"></div>\n<div class="rocky"></div>\n<div class="rocky"></div>\n<div class="rocky"></div>',
            guidelines: '<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>',
            grid: '<div class="target rocky"></div>\n<div class="target rocky"></div>\n<div class="target rocky"></div>\n<div class="target rocky"></div>\n<div class="target rocky"></div>\n<div class="target rocky"></div>\n<div class="target rocky"></div>'
        },
        style: ['.guide, .guidelines {\n\tgrid-template-columns: repeat(7, 1fr);\n}']
    },
    {
        num: 10,
        title: 'CSS Grid',
        subtitle: 'Repeating pattern',
        instructions: {
            part1: "<p>Multiple sizes can be passed to the <code>repeat</code> function.</p>",
            part2: "<p>When multiple sizes are passed in it will repeat those columns or rows as a pattern.</p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 50px 100px);',
            solution: ''
        },
        gridContainer: {
            guide: '<div class="dunes"></div>\n<div class="rocky"></div><div class="dunes"></div><div class="rocky"></div><div class="dunes"></div><div class="rocky"></div>',
            guidelines: '<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>',
            grid: '<div class="target dunes"></div>\n<div class="target rocky"></div>\n<div class="target dunes"></div>\n<div class="target rocky"></div>\n<div class="target dunes"></div>\n<div class="target rocky"></div>'
        },
        style: ['.guide, .guidelines {\n\tgrid-template-columns: repeat(3, 50px 100px);\n}']
    },
    {
        num: 11,
        title: 'CSS Grid',
        subtitle: 'Tracks',
        instructions: {
            part1: "<p>By default, terrain items flow into the Grid as equal height <em>rows</em>. But we can control how the Grid terrains are sized and positioned by defining the number and size of the rows and columns.</p>\n<p>For columns we use <code>grid-template-columns</code>, and for rows we use <code>grid-template-rows</code>.</p>\n<p>We can use a more general term for both rows and columns. Let's call them <em>tracks</em>: <i>a horizontal or vertical slice of the Grid which can be sized and filled with items</i>.</p>\n<p>The new <code>fr</code> unit lets us tell rows and columns - a.k.a <em>tracks</em> - how much of the available space to take up, after any fixed-unit tracks get their dibs.</p>\n<p>Lastly, thanks to this shorthand, <code>repeat(*number of tracks*, *size of tracks*)</code>, the Grid can be defined even faster.</p>",
            part2: ''
        },
        code: {
            preFill: '',
            follow: '',
            solution: ''
        },
        gridContainer: {
            guide: '',
            guidelines: '',
            grid: ''
        },
        style: [],
    },
    {
        num: 12,
        title: 'CSS Grid',
        subtitle: 'Challenge 1.1',
        instructions: {
            part1: "<p>Steps to solve the challenge:</p>\n<ol>\n\t<li>Power up the Grid using <code>display: grid;</code></li>\n\t<li>Define the correct number of tracks using <code>fr</code> units to begin.<br><code>grid-template-columns: <em>1fr 1fr 1fr</em>;</code></li>\n\t<li>Adjust the sizes of the tracks until everything lines up.<br><code>grid-template-columns: <em>1fr 1fr 2fr</em>;</code></li>\n</ol>",
            part2: ''
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '',
            solution: '\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 2fr;'
        },
        gridContainer: {
            guide: '<div class="rocky"></div>\n<div class="cloudy"></div>\n<div class="rocky"></div>',
            guidelines: '<div></div>\n<div></div>\n<div></div>',
            grid: '<div class="target rocky"></div>\n<div class="target cloudy"></div>\n<div class="target rocky"></div>'
        },
        style: ['.guide, .guidelines {\n\tgrid-template-columns: 1fr 1fr 2fr;\n}']
    },
    {
        num: 13,
        title: 'CSS Grid',
        subtitle: 'Challenge 1.2',
        instructions: {
            part1: "<p>Steps to solve the challenge:</p>\n<ol>\n\t<li>Power up the Grid.</li>\n\t<li>Define the correct number of tracks using <code>fr</code> units. \n\t<li>Don't forget you can use <code>repeat()</code> for equal sized columns.</li>\n</ol>",
            part2: ''
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '',
            solution: '\tdisplay: grid;\n\tgrid-template-columns: repeat(4, 1fr);\n\tgrid-template-rows: 1fr 2fr 1fr;'            
        },
        gridContainer: {
            guide: '<div class="dunes"></div>\n<div class="rocky"></div>\n<div class="rocky"></div>\n<div class="dunes"></div>',
            guidelines: '<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>',
            grid: '<div class="target dunes"></div>\n<div class="target rocky"></div>\n<div class="target rocky"></div>\n<div class="target dunes"></div>'
        },
        style: ['.guide, .guidelines {\n\tgrid-template-columns: repeat(4, 1fr);\n\tgrid-template-rows: 1fr 2fr 1fr;\n}']
    },
    {
        num: 14,
        title: 'CSS Grid',
        subtitle: 'Challenge 1.3',
        instructions: {
            part1: "<p>The top and bottom rows are each using <code>20vh</code> units.</p>\n<p>Those are just like percents(<code>%</code>) but are relative to the <em>viewport's height</em> rather than to the Grid element's height.</p>",
            part2: "<p>In this case, the <code>vh</code> units will match the sizes and the <code>fr</code> units will take up the rest of the space.</p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '',
            solution: '\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: 20vh 1fr 20vh;'
        },
        gridContainer: {
            guide: '<div class="dunes"></div>\n<div class="dunes"></div>\n<div class="rocky"></div>\n<div class="rocky"></div>\n<div class="cloudy"></div>\n<div class="cloudy"></div>',
            guidelines: '<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>\n<div></div>',
            grid: '<div class="target dunes"></div>\n<div class="target dunes"></div>\n<div class="target rocky"></div>\n<div class="target rocky"></div>\n<div class="target cloudy"></div>\n<div class="target cloudy"></div>'
        },
        style: ['.guide, .guidelines {\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: 20vh 1fr 20vh;\n}']
    },
    {
        num: 15,
        title: 'CSS Grid',
        subtitle: 'Challenge 1.4',
        instructions: {
            part1: "<p>Looks like that second column uses <code>20vw</code></p>",
            part2: "<p>So <code>vw</code> units, are the same as percents but relative to the viewport's width instead of the Grid element's width.</p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '',
            solution: '\tdisplay: grid;\n\tgrid-template-columns: 1fr 20vw;\n\tgrid-template-rows: 1fr repeat(4, 1fr);',
        },
        gridContainer: {
            guide: '<div class="cloudy"></div>',
            guidelines: '<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>',
            grid: '<div class="target cloudy"></div>'
        },
        style: [
            '.guide {\n\tgrid-template-columns: 1fr 20vw;\n\tgrid-template-rows: 1fr 4fr; }',
            '.guidelines { \n\tgrid-template-columns: 1fr 20vw;\n\tgrid-template-rows: repeat(5, 1fr);}'
        ]
    },
    {
        num: 16,
        title: 'CSS Grid',
        subtitle: 'Challenge 1.5',
        instructions: {
            part1: "<p>This next challenge uses only percentages.</p><p>Percentages are relative to the height of the Grid.</p><p>The top row is <code>25%</code> of the Grid's height.</p>",
            part2: "<p>The bottom line could also have been written as<br><code>grid-template-rows: 1fr 1fr 2fr;</code></p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '',
            solution: '\tdisplay: grid;\n\tgrid-template-columns: 50% 50%;\n\tgrid-template-rows: 25% 25% 50%;',
        },
        gridContainer: {
            guide: '<div class="dunes"></div>\n<div class="rocky"></div>',
            guidelines: '<div></div><div></div><div></div><div></div><div></div><div></div>',
            grid: '<div class="target dunes"></div><div class="target rocky"></div>'
        },
        style: [
            '.guide { grid-template-columns: 50% 50%; grid-template-rows: 25% 25% 50%;',
            '.guidelines { grid-template-columns: 50% 50%; grid-template-rows: 25% 25% 50%;'
        ]
    },
    {
        num: 17,
        title: 'CSS Grid',
        subtitle: 'Challenge 1.6',
        instructions: {
            part1: "<p>A single fixed pixel sized cell in the center.</p>",
            part2: ''
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '',
            solution: '\tdisplay: grid;\n\tgrid-template-columns: 1fr 100px 1fr;\n\tgrid-template-rows: 1fr 100px 1fr;',
        },
        gridContainer: {
            guide: '<div class="cloudy"></div><div class="cloudy"></div><div class="cloudy"></div><div class="cloudy"></div><div class="dunes"></div><div class="cloudy"></div><div class="cloudy"></div><div class="cloudy"></div><div class="cloudy"></div>',
            guidelines: '<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>',
            grid: '<div class="target cloudy"></div><div class="target cloudy"></div><div class="target cloudy"></div><div class="target cloudy"></div><div class="target dunes"></div><div class="target cloudy"></div><div class="target cloudy"></div><div class="target cloudy"></div><div class="target cloudy"></div>'
        },
        style: [
            '.guide, .guidelines { grid-template-columns: 1fr 100px 1fr; grid-template-rows: 1fr 100px 1fr; }'
        ]
    },
    {
        num: 18,
        title: 'CSS Grid',
        subtitle: 'Challenge 1.7',
        instructions: {
            part1: "<p>The middle column is <code>10%</code>, and the top row is <code>200px</code>.",
            part2: "<p>Only the top row needs to be set since the Grid will fill in the rest of the available space.</p>"
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '',
            solution: '\tdisplay: grid;\n\tgrid-template-columns: 2fr 10% 1fr;\n\tgrid-template-rows: 200px;',
        },
        gridContainer: {
            guide: '<div class="cloudy"></div><div class="cloudy"></div><div class="cloudy"></div><div class="rocky"></div><div class="dunes"></div><div class="cloudy"></div>',
            guidelines: '<div></div><div></div><div></div><div></div><div></div><div></div>',
            grid: '<div class="target cloudy"></div><div class="target cloudy"></div><div class="target cloudy"></div><div class="target rocky"></div><div class="target dunes"></div><div class="target cloudy"></div>'
        },
        style: [
            '.guide, .guidelines { grid-template-columns: 2fr 10% 1fr; grid-template-rows: 200px; }'
        ]
    },
    {
        num: 19,
        title: 'CSS Grid',
        subtitle: 'Challenge 1.8',
        instructions: {
            part1: "<p>These columns are using <code>%</code> units, and the bottom row is using <code>px</code> units.</p>",
            part2: ""
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '',
            solution: '\tdisplay: grid;\n\tgrid-template-columns: 25% 25%;\n\tgrid-template-rows: 1fr 1fr 50px;',
        },
        gridContainer: {
            guide: '<div class="cloudy"></div><div class="cloudy"></div><div class="cloudy"></div><div class="dunes"></div><div class="rocky"></div><div class="rocky"></div>',
            guidelines: '<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>',
            grid: '<div class="target cloudy"></div><div class="target cloudy"></div><div class="target cloudy"></div><div class="target dunes"></div><div class="target rocky"></div><div class="target rocky"></div>'
        },
        style: [
            '.guide { grid-template-columns: 25% 25%; grid-template-rows: 1fr 1fr 50px; }',
            '.guidelines { grid-template-columns: 25% 25% 1fr; grid-template-rows: 1fr 1fr 50px; }'
        ]
    },
    {
        num: 20,
        title: 'CSS Grid',
        subtitle: 'Challenge 1.9',
        instructions: {
            part1: "<p>The red rows are <code>50px</code>.</p><p>Try using the <code>repeat()</code> shorthand to specify the <em>pattern</em>.</p>",
            part2: ""
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '',
            solution: '\tdisplay: grid;\n\tgrid-template-rows: repeat(2, 50px 1fr);',
        },
        gridContainer: {
            guide: '<div class="dunes"></div><div class="rocky"></div><div class="dunes"></div><div class="rocky"></div>',
            guidelines: '<div></div><div></div><div></div><div></div>',
            grid: '<div class="target dunes"></div><div class="target rocky"></div><div class="target dunes"></div><div class="target rocky"></div>'
        },
        style: [
            '.guide, .guidelines { grid-template-rows: repeat(2, 50px 1fr);'
        ]
    },
    {
        num: 21,
        title: 'CSS Grid',
        subtitle: 'Challenge 1.10',
        instructions: {
            part1: "",
            part2: ""
        },
        code: {
            preFill: '.grid {\n\t@\n}',
            follow: '',
            solution: '\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);',
        },
        gridContainer: {
            guide: '<div class="lava"></div><div class="lava"></div><div class="lava"></div>',
            guidelines: '<div></div><div></div><div></div>',
            grid: '<div class="target lava"></div><div class="target lava"></div><div class="target lava"></div>'
        },
        style: [
            '.guide, .guidelines { grid-template-columns: repeat(3, 1fr); }'
        ]
    },
    // {
    //     num: 0,
    //     title: 'CSS Grid',
    //     subtitle: '',
    //     instructions: {
    //         part1: "",
    //         part2: ""
    //     },
    //     code: {
    //         preFill: '.grid {\n\t@\n}',
    //         follow: '',
    //         solution: '',
    //     },
    //     gridContainer: {
    //         guide: '',
    //         guidelines: '',
    //         grid: ''
    //     },
    //     style: []
    // },
];