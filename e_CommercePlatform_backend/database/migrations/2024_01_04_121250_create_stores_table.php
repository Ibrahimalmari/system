
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
        Schema::create('stores', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('address');
            $table->text('description');
            $table->string('personalNumber')->unique();
            $table->string('type');
            $table->string('phone');
            $table->string('coverPhoto');///cover_photo
            $table->integer('orderRecive')->default(0);
            $table->integer('orderDone')->default(0);
            $table->integer('orderReject')->default(0);
            $table->time('openTime');
            $table->foreignId('seller_id')->constrained('seller_men')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('created_by')->constrained("admins")->onUpdate('cascade')->onDelete('cascade');
            $table->enum('status',['Active' ,'Inactive'])->default('Active');
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
        Schema::dropIfExists('stores');
    }
};