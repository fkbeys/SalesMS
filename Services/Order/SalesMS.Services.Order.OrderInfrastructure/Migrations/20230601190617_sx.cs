using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SalesMS.Services.Order.OrderInfrastructure.Migrations
{
    /// <inheritdoc />
    public partial class sx : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "Ordering");

            migrationBuilder.CreateTable(
                name: "Orders",
                schema: "Ordering",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    adress_provience = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    adress_district = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    adress_street = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    adress_zipcode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    buyerId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OrderItems",
                schema: "Ordering",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    productId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    productName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    pictureUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    OrderModelId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderItems_Orders_OrderModelId",
                        column: x => x.OrderModelId,
                        principalSchema: "Ordering",
                        principalTable: "Orders",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_OrderModelId",
                schema: "Ordering",
                table: "OrderItems",
                column: "OrderModelId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderItems",
                schema: "Ordering");

            migrationBuilder.DropTable(
                name: "Orders",
                schema: "Ordering");
        }
    }
}
