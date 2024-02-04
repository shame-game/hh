
fetchSheet
  .fetch({
    gSheetId: "1RzWxkaUh-YhyGE3d6dJTfTtTqwT6sAIttNXK2Xe6_9Y",
    wSheetName: "sum",
  })
  .then((rows) => {
    let content = {};
    rows.forEach(row => {
      let key = row.section;
      Object(content).hasOwnProperty(key) || Object.assign(content, { [key]: [] });
      content[key].push(row);
    });
    console.log(content.pay);
    vams('.payclick').forEach((box) => {
      box.addEventListener('click', (e) => {
        let index = box.getAttribute('index')
        let list = [];
        list = content.pay[index]
        console.log(list);
        vam('.nameds').setAttribute('value',`${list.row1}`)
        vam('#payqr').src = list.row2
        vam('body').setAttribute('style', 'overflow-y: hidden;')
        vam('#Box_1412c>.background').setAttribute('style', 'display:block')
        vam('#Box_1412c>.box').setAttribute('style', 'display:flex')
        vam('#Box_1412c .dot').classList.add('acc')
        vam('#Box_1412c .content').classList.add('acc')
        vam('#Box_1412c>.background').addEventListener('click', () => {
          vam('body').setAttribute('style', 'overflow-y: auto;')
          vam('#Box_1412c>.background').setAttribute('style', 'display:none')
          vam('#Box_1412c>.box').setAttribute('style', 'display:none')
          vam("#Box_1412c .content.acc").classList.remove('acc')
          vams('#Box_1412c .dot.acc').forEach((tab) => {
            tab.classList.remove('acc')
          })
          vams('#Box_1412c .line>p').forEach((line) => {
            line.setAttribute('style', 'display: none')
          })
        })
        vam('#Box_1412c .out').addEventListener('click', () => {
          vam('body').setAttribute('style', 'overflow-y: auto;')
          vam('#Box_1412c>.background').setAttribute('style', 'display:none')
          vam('#Box_1412c>.box').setAttribute('style', 'display:none')
        })
      })
    })

    vam('#Box_1412c .suc').addEventListener('click', () => {
      vam('#Box_1412c>.background').setAttribute('style', 'display:none')
      vam('#Box_1412c>.box').setAttribute('style', 'display:none')
      vam("#Box_1412c .content.acc").classList.remove('acc')
      vams('#Box_1412c .dot.acc').forEach((tab) => {
        tab.classList.remove('acc')
      })
      vams('#Box_1412c .line>p').forEach((tab) => {
        tab.setAttribute('style', 'display: none')
      })
      vam('body').setAttribute('style', 'overflow-y: auto;')
    })


    vams('#Box_1412c .nextt').forEach((tab, index) => {
      var contentlist = vams('#Box_1412c .content')[index + 1];
      var dotlist = vams('#Box_1412c .dot')[index + 1];
      var line = vams('#Box_1412c .line>p')[index];
      tab.addEventListener('click', () => {
        vam("#Box_1412c .content.acc").classList.remove('acc')
        contentlist.classList.add('acc')
        dotlist.classList.add('acc')
        line.setAttribute('style', 'display:block')
      })
    })

    vams('#Box_1412c .back').forEach((tab, index) => {
      var contentlist = vams('#Box_1412c .content')[index + 1];
      var contentback = vams('#Box_1412c .content')[index];
      var dotlist = vams('#Box_1412c .dot')[index + 1];
      var line = vams('#Box_1412c .line>p')[index]
      const backtitle = vams('#Box_1412c .back');
      tab.addEventListener('click', () => {
        contentlist.classList.remove('acc');
        contentback.classList.add('acc')
        dotlist.classList.remove('acc')
        line.setAttribute('style', 'display: none')
      })
    })

  });