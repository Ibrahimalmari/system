<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('fullname');
            $table->foreignId('user_id')->constrained('users')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('cart_id');
            $table->string('email');
            $table->string('phone');
            $table->string('trackingNum');
            $table->string('pincode');
            $table->float("totle_price");
            $table->mediumText('address');
            $table->string('payment_mode');
            $table->integer('payment_id')->nullable();
            $table->enum('status',['Processing' ,'Confirmed','Deliverd','Cancelled'])->default('Processing');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};