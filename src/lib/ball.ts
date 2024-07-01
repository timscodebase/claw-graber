class Ball {
  /*
   * MARK: Setup
   */
  private colors: string[]; // Ensure this is defined in your class
  private ctx: CanvasRenderingContext2D;
  private x_coord: number;
  private y_coord: number;
  private radius: number;
  private ball_color: string = this.random_ball_color();
  private text_color: string = this.opposite_text_color(this.ball_color);
  private font: string;

  constructor(
    ctx: CanvasRenderingContext2D,
    x_coord: number,
    y_coord: number,
    radius: number,
    font: string
  ) {
    this.ctx = ctx;
    this.x_coord = x_coord;
    this.y_coord = y_coord;
    this.radius = radius;
    this.font = font;
    // Initialize colors array here or ensure it's passed in and set properly
    this.colors = [
      "#FF0000",
      "#00FF00",
      "#0000FF",
      "#FFFF00",
      "#FF00FF",
      "#00FFFF",
    ];
    // Initialize ball_color and text_color using the random_ball_color method or any other method
    this.ball_color = this.random_ball_color();
    this.text_color = "#000000"; // Example text color, adjust as needed
  }

  private random_ball_color(): string {
    // Check if this.colors is initialized
    if (!this.colors || this.colors.length === 0) {
      console.error("Colors array is not initialized.");
      return "#000000"; // Default color or handle the error as appropriate
    }
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  /*
   * MARK: Private
   */

  private opposite_text_color(color: string): string {
    if (color === "#FF0000") {
      return "#00FF00";
    } else if (color === "#00FF00") {
      return "#FF0000";
    } else if (color === "#0000FF") {
      return "#FFFF00";
    } else if (color === "#FFFF00") {
      return "#0000ff";
    } else if (color === "#FF00FF") {
      return "#00FFFF";
    } else if (color === "#00FFFF") {
      return "#FF00FF";
    }

    return "#000000";
  }

  private draw_solid_ball(id: number) {
    // Draw a solid ball on the canvas with the specified ball color
    this.ctx.beginPath();
    this.ctx.arc(this.x_coord, this.y_coord, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.ball_color; // Use the specified ball color
    this.ctx.fill();
    this.ctx.closePath();

    // Set the font size and style for the ball number
    this.ctx.font = this.font;
    this.ctx.fillStyle = this.ball_color; // Use the specified text color

    // Calculate the position for the text to make it centered
    const textWidth = this.ctx.measureText(id.toString()).width;
    const textX = this.x_coord - textWidth / 2;
    const textY = this.y_coord + 10; // Adjust this value to center the text vertically

    // Draw the ball number (or id)
    this.ctx.fillStyle = this.text_color; // Set the fill color to the ball color
    this.ctx.fillText(id.toString(), textX, textY);
  }

  // private draw_gradient_ball(id: number) {}

  // private draw_striped_ball(id: number) {
  //   // Draw a striped ball on the canvas with the current position and color and id
  //   this.ctx.beginPath();
  //   this.ctx.arc(this.x_coord, this.y_coord, this.radius, 0, 2 * Math.PI);
  //   this.ctx.fillStyle = this.color;
  //   this.ctx.fill();
  //   this.ctx.closePath();

  //   // Set the font size and style for the ball number
  //   this.ctx.font = this.font;
  //   this.ctx.fillStyle = this.colors[id % 6];
  //   // Calculate the position for the text to make it centered
  //   // Adjust these values as needed to center the text on your balls
  //   const textWidth = this.ctx.measureText(id.toString()).width;
  //   const textX = this.x_coord - textWidth / 2;
  //   const textY = this.y_coord + 10; // Adjust this value to center the text vertically
  //   // Draw the ball number (or id)
  //   // Text color is the opposite of the ball color
  //   this.ctx.fillText(id.toString(), textX, textY);

  //   // Draw the stripes
  //   this.ctx.fillStyle = this.colors[id % 6];
  //   this.ctx.fillRect(
  //     this.x_coord - this.radius,
  //     this.y_coord - this.radius,
  //     2 * this.radius,
  //     2 * this.radius
  //   );
  //   this.ctx.fill();
  // }

  /*
   * MARK: Public
   */

  drawBalls(number_of_balls: number) {
    for (let i = 0; i < number_of_balls; i++) {
      this.x_coord = Math.random() * this.ctx.canvas.width;
      this.y_coord = Math.random() * this.ctx.canvas.height;

      console.log(i, this.x_coord, this.y_coord);
      this.draw_solid_ball(i);
    }
  }
}

export default Ball;
