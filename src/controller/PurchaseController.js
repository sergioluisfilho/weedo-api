const database = require("../database/mysql");
const xl = require("excel4node");

module.exports = {
  async SavePurchase(req, res, next) {
    const { cart, amount, address } = req.body;
    database.query(
      "INSERT INTO purchases (cart, amount, address) values (?, ?, ?);",
      [JSON.stringify(cart), amount, address],
      async (err, result) => {
        if (err) return res.status(404).json(err);
        else {
          return res.json({ message: "created" });
        }
      }
    );
  },

  async GetPurchaseInfo(req, res, next) {
    database.query("SELECT * FROM purchases;", [], async (err, result) => {
      if (err) return res.json(err);
      else {
        const wb = new xl.Workbook();
        const ws = wb.addWorksheet("Compras");
        const headingColumnNames = ["id", "cart", "amount", "address"];

        let headingColumnIndex = 1;
        headingColumnNames.forEach((heading) => {
          ws.cell(1, headingColumnIndex++).string(heading);
        });
        let rowIndex = 2;

        result.forEach((record) => {
          let columnIndex = 1;
          Object.keys(record).forEach((columnName) => {
            ws.cell(rowIndex, columnIndex++).string(
              record[columnName].toString()
            );
          });
          rowIndex++;
        });

        wb.write("compras.xlsx");
        return res.json(result);
      }
    });
  },
};
